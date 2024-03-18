import React, { useEffect } from 'react'
import { Tabs} from 'antd';

const ClientDetails = () => {

    const CONFIG_Token = {                                         //config object
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile_number, setMobile_number] = useState(0);
    const [contact_person, setContact_person] = useState('');
    const [contact_email, setContact_email] = useState('');
    const [country, setOurCountry] = useState('');
    const [country_list, setOurCountryList] = useState([]);
    const [address, setAddress] = useState('');
    const [contact_mobile, setContact_mobile] = useState('');

    const displayClientDetails = async () => {
        try {
           const payload = {
               "client_id": clientId
           }
           const response = await axios.post(`${getClientDetails}`,payload, CONFIG_Token);
           const clientData=response.data.data;
        
           setName(clientData.name);   
           setEmail(clientData.email);
           setMobile_number(clientData.mobile_number);
           setContact_person(clientData.contact_person);
           setContact_email(clientData.contact_email);
           setAddress(clientData.address);
           setContact_mobile(clientData.contact_mobile);
           setClient_id(clientData.id);
           setOurCountry(clientData.country);
        } catch (error) {
           console.log(error)           
        }
   };

   useEffect(() => {
       displayClientDetails();
   },[]);


  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 d-flex justify-content-between">
                <p>#1111-EARTHOOD</p>
                <p>edit icon</p>
            </div>
        </div>
        <div className="row">
        <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={<p>Overview</p> } key={1}>
        
        </Tabs.TabPane>
        <Tabs.TabPane tab={<p>Project Details</p> } key={2} >

        </Tabs.TabPane>
        <Tabs.TabPane tab={<p></p> } key={3} >

          
        </Tabs.TabPane>
        <Tabs.TabPane tab={<p></p>} key={4}>
          
        </Tabs.TabPane>

      </Tabs>
        </div>
    </div>
    </>
  )
}

export default ClientDetails