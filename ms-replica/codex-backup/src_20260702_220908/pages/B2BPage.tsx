export default function B2BPage() {
  return (
    <div style={{fontFamily:'"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif',background:"#fff",color:'#000',padding:"80px 48px",maxWidth:800,margin:"0 auto",textAlign:"center"}}>
      <h2 style={{fontSize:34,fontWeight:100,lineHeight:"40px",color:"#0e1726",margin:"0 0 24px 0"}}>We are sorry, the page you requested cannot be found.</h2>
      <p style={{fontSize:16,fontWeight:400,color:'#000',lineHeight:"24px",margin:"0 0 32px 0"}}>The URL may be misspelled or the page you're looking for is no longer available.</p>
      <a href="/" style={{fontSize:13,color:"#0078D4",fontWeight:400,textDecoration:"none"}}>Go to Microsoft homepage</a>
      <div style={{marginTop:48}}>
        <h2 style={{fontSize:15,fontWeight:600,color:"#616161",lineHeight:"20px",margin:"0 0 16px 0"}}>Popular resources</h2>
        <div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"}}>
          {["Microsoft 365","Azure","Dynamics 365","Power Platform","Visual Studio","Windows","Surface","Xbox","Teams","Copilot","OneDrive","Outlook","LinkedIn","Microsoft Learn","Microsoft Community","Developer Center","Education","Support","Security","Compliance","AI","Advertising","Careers","About","Investors","Sustainability","Diversity","Privacy","Terms of Use","Trademarks","Health","Safety","Accessibility","Site Map","Contact Us","Microsoft Store","Gift Cards","Student Discounts","Military Discounts","Volume Licensing","Partner Programs","Startups","Nonprofits","Government","Healthcare","Manufacturing","Retail","Financial Services","Education Institutions"].map((r,i)=>(
            <a key={i} href="#" style={{fontSize:11,color:"#616161",lineHeight:"20px",textDecoration:"none"}}>{r}</a>
          ))}
        </div>
      </div>
    </div>
  )
}