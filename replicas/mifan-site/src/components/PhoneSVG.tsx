export default function PhoneSVG({color,large,image}) {
  const w=large?300:180; const h=large?460:270;
  if(image) {
    return (
      <div style={{width:w,height:h,background:"#f5f5f7",borderRadius:18,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 12px 32px rgba(0,0,0,0.2))",border:"1px solid #e6e6ea"}}>
        <img src={image} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
      </div>
    );
  }
  return (
    <svg width={w} height={h} viewBox="0 0 180 280" fill="none" style={{filter:"drop-shadow(0 24px 72px rgba(0,0,0,0.3))"}}>
      <defs>
        <linearGradient id="pb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.7"/><stop offset="25%" stopColor={color}/>
          <stop offset="75%" stopColor={color} stopOpacity="0.9"/><stop offset="100%" stopColor={color} stopOpacity="0.6"/>
        </linearGradient>
        <linearGradient id="ps" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0a1a"/><stop offset="50%" stopColor="#1a1a3e"/><stop offset="100%" stopColor="#0f3460"/>
        </linearGradient>
        <radialGradient id="fl" cx="0.5" cy="0.3" r="0.6"><stop offset="0%" stopColor="#fff" stopOpacity="0.12"/><stop offset="100%" stopColor="#fff" stopOpacity="0"/></radialGradient>
      </defs>
      <rect x="10" y="4" width="160" height="272" rx="28" fill="url(#pb)" />
      <rect x="18" y="18" width="144" height="205" rx="12" fill="url(#ps)" />
      <rect x="18" y="18" width="144" height="205" rx="12" fill="url(#fl)" />
      <rect x="22" y="22" width="136" height="197" rx="8" fill="#fff" opacity="0.02" />
      <circle cx="50" cy="60" r="35" fill="#ff6b35" opacity="0.15" />
      <circle cx="110" cy="100" r="45" fill="#00c4ff" opacity="0.1" />
      <circle cx="60" cy="140" r="30" fill="#ff3366" opacity="0.12" />
      <rect x="30" y="40" width="24" height="24" rx="5" fill="#0071e3" opacity="0.7" />
      <rect x="62" y="40" width="24" height="24" rx="5" fill="#34c759" opacity="0.7" />
      <rect x="94" y="40" width="24" height="24" rx="5" fill="#ff9500" opacity="0.7" />
      <rect x="30" y="72" width="24" height="24" rx="5" fill="#ff2d55" opacity="0.7" />
      <rect x="62" y="72" width="24" height="24" rx="5" fill="#5856d6" opacity="0.7" />
      <rect x="94" y="72" width="24" height="24" rx="5" fill="#00c4ff" opacity="0.7" />
      <rect x="65" y="26" width="50" height="3" rx="1.5" fill="#555" opacity="0.3" />
      <rect x="70" y="248" width="40" height="4" rx="2" fill="#fff" opacity="0.2" />
      <rect x="50" y="18" width="80" height="16" rx="8" fill={color} />
      <circle cx="66" cy="26" r="3.5" fill="#000" opacity="0.6" />
      <circle cx="80" cy="26" r="3.5" fill="#000" opacity="0.6" />
      <circle cx="94" cy="26" r="3.5" fill="#000" opacity="0.6" />
      <rect x="96" y="23" width="12" height="6" rx="2" fill="#000" opacity="0.4" />
      <rect x="6" y="85" width="8" height="40" rx="4" fill={color} />
      <rect x="166" y="100" width="8" height="30" rx="4" fill={color} opacity="0.4" />
    </svg>
  );
}
