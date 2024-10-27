import cssstyle from "./service.module.css"

const ServicePage = () => {
    return (
      <div>
        <ul>
        <li><a href= "/service/web-development" target ="_blank">Web- Development</a></li>
        </ul>
        <h1 className={cssstyle.service}>My Service Page</h1>
        
      </div>
    );
  };
  
  export default ServicePage;