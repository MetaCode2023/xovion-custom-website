import {readFile, mkdir, writeFile, cp, rm} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
export const escapeHTML = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function validateSite(s, production=false) {
  for (const key of ['name','tagline','location','headline','description','email']) if(typeof s[key]!=='string'||!s[key].trim()) throw Error(`Fill in ${key} in src/site.json`);
  if(!Array.isArray(s.services)||!s.services.length||s.services.some(x=>typeof x.name!=='string'||!x.name.trim()||typeof x.description!=='string')) throw Error('Add named services and descriptions');
  if(!['demo','email','booking'].includes(s.contactMode)) throw Error('contactMode must be demo, email or booking');
  if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s.email)) throw Error('Provide a valid email');
  if(s.contactMode==='booking') { const u=new URL(s.bookingUrl); if(u.protocol!=='https:'||u.username||u.password) throw Error('Use an HTTPS booking URL without credentials'); }
  if(production){
    if(s.example!==false||s.contactMode==='demo'||s.email.endsWith('@example.com')) throw Error('Replace example content and choose a real contact method before production');
    const u=new URL(s.siteUrl); if(u.protocol!=='https:'||u.hostname==='localhost'||u.hostname.endsWith('.example')||u.hostname==='example.com'||u.username||u.password||u.search||u.hash||u.pathname!=='/') throw Error('siteUrl must be your real HTTPS origin');
  }
}
export async function build(production=false){
 const s=JSON.parse(await readFile(new URL('../src/site.json',import.meta.url),'utf8'));validateSite(s,production);
 const e=escapeHTML;
 const cta=(label,service='')=>s.contactMode==='demo'?`<button class="button" data-demo="${e(service)}">${e(label)}</button>`:`<a class="button" href="${e(s.contactMode==='email'?'mailto:'+s.email:s.bookingUrl)}">${e(label)}</a>`;
 let html=await readFile(new URL('../src/index.html',import.meta.url),'utf8');
 const replacements={NAME:e(s.name),TAGLINE:e(s.tagline),LOCATION:e(s.location),HEADLINE:e(s.headline),DESCRIPTION:e(s.description),CTA:cta('Let’s make a plan'),SERVICES:s.services.map((x,i)=>`<article><span class="number">0${i+1}</span><h3>${e(x.name)}</h3><p>${e(x.description)}</p>${cta('Explore this service',x.name)}</article>`).join(''),OPTIONS:s.services.map(x=>`<option>${e(x.name)}</option>`).join(''),NOTICE:production?'':`<aside class="notice">${s.example?'Fictional example business':'Website preview'} · ${s.contactMode==='demo'?'Forms are demos; nothing is sent.':'Contact links open the configured destination.'}</aside>`,METADATA:production?`<link rel="canonical" href="${e(s.siteUrl)}">`:'<meta name="robots" content="noindex,nofollow">'};
 html=html.replace(/\{\{([A-Z]+)\}\}/g,(_,key)=>{if(!(key in replacements))throw Error('Unknown template token '+key);return replacements[key]});
 await rm('dist',{recursive:true,force:true});await mkdir('dist');await cp('public','dist',{recursive:true});await writeFile('dist/index.html',html);await cp('src/client.js','dist/client.js');
 await writeFile('dist/robots.txt',production?`User-agent: *\nAllow: /\nSitemap: ${s.siteUrl.replace(/\/$/,'')}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n');
 if(production)await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${e(s.siteUrl)}</loc></url></urlset>`);
 console.log(`Built ${production?'production':'preview'} → dist/`);
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href) await build(process.argv.includes('--production'));
