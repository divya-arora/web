import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        // icon: 'cpp.png',
        title: 'C++',
        imageUrl: "cpp.png",
        // description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        // icon: <FiLayers />,
        title: 'Python',
        imageUrl: "python.png",
        // description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        // icon: <FiUsers />,
        title: 'Javascript',
        imageUrl: "js.png",
        // description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {/* {val.icon} */}
                                        <img src={`/assets/images/preview/${val.imageUrl}`} alt="tech" />
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
