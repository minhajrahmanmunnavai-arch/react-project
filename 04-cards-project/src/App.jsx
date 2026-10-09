import JobCard from "./components/cards";

const App = () => {

  const jobOpenings = [
    {
      brandlogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hour",
      location: "Dhaka, Bangladesh"
    },
    {
      brandlogo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/592/small_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      company: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Hyderabad, India"
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGARB4PRYKkemGJgn2lUROMMlKLDLTxSgd0SDZ_b_hF-zr5EwsH-I0GcPi&s=10",
      company: "Amazon",
      datePosted: "3 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hour",
      location: "Bangalore, India"
    },
    {
      brandlogo: "https://static.vecteezy.com/system/resources/thumbnails/055/210/890/small_2x/meta-logo-square-rounded-meta-logo-meta-logo-free-download-free-png.png",
      company: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hour",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
      company: "Apple",
      datePosted: "4 days ago",
      post: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Cupertino, USA"
    },
    {
      brandlogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
      company: "Netflix",
      datePosted: "10 weeks ago",
      post: "UI Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$52/hour",
      location: "Los Gatos, USA"
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthFkKxxe5oOqzfgM7YR46pLgPnm9Q4ihc6Cz3RsR3akjh-KFpH7NTKORj&s=10",
      company: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hour",
      location: "Santa Clara, USA"
    },
    {
      brandlogo: "https://static.vecteezy.com/system/resources/previews/046/861/669/non_2x/adobe-express-logo-free-png.png",
      company: "Adobe",
      datePosted: "3 weeks ago",
      post: "UX Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$44/hour",
      location: "Noida, India"
    },
    {
      brandlogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/960px-Salesforce.com_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      company: "Salesforce",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hour",
      location: "Dhaka, Bangladesh"
    },
    {
      brandlogo: "https://www.ibm.com/content/adobe-cms/us/en/history/logo/jcr:content/root/table_of_contents/body/content_section_styled/content-section-body/content_item_thumbna/items/item_horizontal_with_368749902/image.coreimg.jpeg/1765317107622/1956-logo-yk00320.jpeg",
      company: "IBM",
      datePosted: "10 days ago",
      post: "Cloud Software Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$57/hour",
      location: "Dhaka, Bangladesh"
    }
  ];


  return (
    <div className="card-container">
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx} > <JobCard companyName={elem.company} 
        brandlogo={elem.brandlogo} 
        timeAgo={elem.datePosted} 
        post={elem.post} 
        salary={elem.pay} 
        location={elem.location}
        tag1={elem.tag1}
        tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}

export default App