export default function B2BPage() {
  return (
    <div style={{maxWidth:1200,margin:'0 auto',padding:'80px 24px'}}>
      <h1 style={{fontSize:46,fontWeight:600,lineHeight:1.1,marginBottom:16}}>Microsoft 365 Business</h1>
      <p style={{fontSize:20,fontWeight:200,lineHeight:1.6,marginBottom:48}}>Solutions for small and medium-sized businesses.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        {['Business Basic','Business Standard','Business Premium','Apps for Business','Enterprise E3','Enterprise E5'].map((n,i)=>(
          <div key={i} style={{background:'#f2f2f2',padding:'32px',borderRadius:2}}>
            <div style={{width:48,height:48,background:['#0078D4','#107C10','#D83B01','#FFB900','#0078D4','#107C10'][i],borderRadius:2,marginBottom:16}}></div>
            <h3 style={{fontSize:20,fontWeight:600,marginBottom:8}}>{n}</h3>
            <p style={{fontSize:14,lineHeight:1.6,color:'#616161',marginBottom:12}}>Plan {['B','S','P','A','E3','E5'][i]} – includes {['web+mobile','desktop+web','full suite','basic','advanced','premium'][i]} features.</p>
            <a style={{fontWeight:600,color:'#0078D4',cursor:'pointer'}}>See plans &gt;</a>
          </div>
        ))}
      </div>
    </div>
  );
}