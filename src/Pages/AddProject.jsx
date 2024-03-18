import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Tabs, Upload } from 'antd'
import axios from "axios"
import * as yup from 'yup';
// import { InboxOutlined } from '@ant-design/icons';
import { get_client_name_url } from '../config';
import { get_scope_url } from '../config';
import { get_sectoralscope_url } from '../config';
import { get_program_url } from '../config';
import { get_country_url } from '../config';
import { get_assesment_url } from '../config';
import { pt_proposal_team_url } from '../config';
import { pt_proposal_submit_url } from '../config';
import { toast } from 'react-toastify';
// import { get_ta_expert_url } from '../config';
// import { get_validator_url } from '../config';
// import { get_finace_expert_url } from '../config';
// import { get_math_expert_url } from '../config';
// import { get_technical_reviewer_url } from '../config';
// import { get_local_expert_url } from '../config';
// import { get_trainee_validator_url } from '../config';
// const { Dragger } = Upload;



const AddProject = () => {


    const navigate = useNavigate();
    const [projectid, setProjectId] = useState()
    const [clientName, setClientName] = useState([]);
    const [sectoralScope, setSectoralScope] = useState([]);
    const [loading, setLoading] = useState(true);
    const [myscope, setMyScope] = useState([]);
    const [program, setProgram] = useState([]);
    const [country, setCountry] = useState([]);
    const [atlist, setAtList] = useState([]);
    const [activeTab, setActiveTab] = useState('1');
    const [myprojectName, setMyProjectName] = useState('');
    const [error, setError] = useState('');
    const [earthoodId, setEarthoodId] = useState('');
    const [earthoodIdError, setEarthoodIdError] = useState('');



    const CONFIG_Token = {                                         //config object
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
    }


    const CONFIG_Token2 = {                                         //config object
        headers: {
            "Authorization": "Bearer " + sessionStorage.getItem("token"),
            'Content-Type': 'multipart/form-data'
        }
    }


    const handleMyProjectChange = (event) => {
        const { value } = event.target;
        setMyProjectName(value);
        // Validate input value
        if (value.length < 3 || value.length > 40 || !isNaN(value)) {
            setError('Project Name must be in alphabatic characters with 3 to 40 characters');
        } else {
            setError('');
        }
    };


    const handleEarthoodIdChange = (event) => {
        const value = event.target.value;
        setEarthoodId(value); // Update input value

        // Validate input value
        if (!/^[a-zA-Z0-9]{3,40}$/.test(value)) {
            setEarthoodIdError('Earthood Id must be alphanumeric and between 3 to 40 characters');
        } else {
            setEarthoodIdError(''); // Clear error if validation passes
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(e);
        const formData = new FormData(e.target)
        try {
            const response = await axios.post(`${pt_proposal_team_url}`, formData, CONFIG_Token);
            setProjectId(response.data.project_id);
            if (!response.data.status) {
                toast.error(response.data.message)
            }
            else {
                toast.success("Form Submitted Successfully")
                console.log('Data saved:', response.data);
                // Optionally, navigate to the next step or perform any other action
                setActiveTab('2');
            }


        } catch (error) {
            console.error('Error saving data:', error);
            // Optionally, display an error message to the user
        }
    };
    console.log("first", projectid)

    // const handleSubmitFile = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     console.log(formData)
    //     try {
    //         // Make a POST request to save the files in the database
    //         const response = await axios.post(`${pt_proposal_submit_url}`, formData);
    //         console.log('Files saved:', response.data);
    //         // Optionally, perform any other actions upon successful submission
    //     } catch (error) {
    //         console.error('Error saving files:', error);
    //         // Optionally, display an error message to the user
    //     }
    // };

    const handleSubmitFile = async (e) => {
        e.preventDefault();
        console.log(e.target)
        const formData = new FormData();
        console.log("firstjkhkj", projectid)
        formData.append('proposal_id', projectid)
        console.log(formData)
        // Get all file input elements from the form
        const fileInputs = e.target.querySelectorAll('input[type="file"]');

        // Loop through each file input and append its files to the FormData object
        fileInputs.forEach(input => {
            const files = input.files;
            // Append each file to the FormData object
            for (let i = 0; i < files.length; i++) {
                formData.append(input.name, files[i]);
            }
            console.log(files)
        });

        try {
            // Make a POST request to save the files in the database
            const response = await axios.post(`${pt_proposal_submit_url}`, formData, CONFIG_Token2);
            console.log('Files saved:', response.data);
            if (!response.data.status) {
                toast.error("Files do not uploaded")
            }
            else {
                toast.success("Files Submitted Successfully")
                console.log('Data saved:', response.data);
                navigate('/dashboard')
                // Optionally, navigate to the next step or perform any other action

            }
            // Optionally, perform any other actions upon successful submission
        } catch (error) {
            console.error('Error saving files:', error);
            // Optionally, display an error message to the user
        }

    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     try {
    //         // Convert formData to JSON object
    //         const formDataObject = {};
    //         formData.forEach((value, key) => {
    //             formDataObject[key] = value;
    //         });

    //         // Validate form data
    //         await schema.validate(formDataObject, { abortEarly: false });

    //         // If validation succeeds, proceed with form submission
    //         console.log('Form data is valid:', formDataObject);

    //         // Your form submission logic here
    //     } catch (error) {
    //         // If validation fails, catch the error and handle it
    //         console.error('Validation error:', error.errors);
    //         // Optionally, display error messages to the user
    //     }
    // };


    const handleBackToTab1 = () => {
        setActiveTab('1');
    };


    // const [taExpert, setTaExpert] = useState([]);
    // const [validator, setValidator] = useState([]);
    // const [financeExpert, setFinanaceExpert] = useState([]);
    // const [technicalReviewer, setTechnicalReviewer] = useState([]);
    // const [mathExpert, setMathExpert] = useState([]);
    // const [localExpert, setLocalExpert] = useState([]);
    // const [traineeValidator, setTraineeValidator] = useState([]);


    // const props = {
    //     name: 'file',
    //     multiple: true,
    //     action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    //     onChange(info) {
    //         const { status } = info.file;
    //         if (status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully.`);
    //         } else if (status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    //     onDrop(e) {
    //         console.log('Dropped files', e.dataTransfer.files);
    //     },
    // };


    // const handleChange = (event) => {
    //     setFormData({ ...formData, [event.target.name]: event.target.value });
    //   };


    // post request for saving the form data in backend
    //   const handleSaveAndNext = async () => {
    //     try {
    //       const response = await axios.post(`${pt_proposal_team_url}`, formData);
    //       console.log('Data saved:', response.data);
    //       // Optionally, navigate to the next step or perform any other action
    //     } catch (error) {
    //       console.error('Error saving data:', error);
    //       // Optionally, display an error message to the user
    //     }
    //   };

    // to get the dropdown options from datbase for client name
    useEffect(() => {
        const fetchDataClientName = async () => {
            try {
                const responseclientname = await axios.get(`${get_client_name_url}`);
                setClientName(responseclientname.data.data); // Assuming the API returns an array of objects
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        fetchDataClientName();
    }, []); // Runs once on component mount

    // to get the dropdown options from datbase for sectoralscope
    useEffect(() => {
        const fetchDataSectoralScope = async () => {
            try {
                const responsesector = await axios.get(`${get_sectoralscope_url}`);
                setSectoralScope(responsesector.data.data); // Assuming the API returns an array of objects
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        fetchDataSectoralScope();
    }, []); // Runs once on component mount


    // to get the dropdown options from datbase for scope
    useEffect(() => {
        const fetchDataScope = async () => {
            try {
                const responsescope = await axios.get(`${get_scope_url}`);
                setMyScope(responsescope.data.data); // Assuming the API returns an array of objects
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        fetchDataScope();
    }, []); // Runs once on component mount


    // to get the dropdown options from datbase for program
    useEffect(() => {
        const fetchDataProgram = async () => {
            try {
                const responseprogram = await axios.get(`${get_program_url}`);
                setProgram(responseprogram.data.data); // Assuming the API returns an array of objects
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        fetchDataProgram();
    }, []); // Runs once on component mount


    // to get the dropdown options from datbase for country
    useEffect(() => {
        const fetchDataCountry = async () => {
            try {
                const responsecountry = await axios.get(`${get_country_url}`);
                setCountry(responsecountry.data.data); // Assuming the API returns an array of objects
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        fetchDataCountry();
    }, []); // Runs once on component mount


    // to get the dropdown options from datbase for teamleader
    useEffect(() => {
        const fetchDataTechnicalReviewer = async () => {
            try {
                const responseteamleader = await axios.get(`${get_assesment_url}`);
                setAtList(responseteamleader.data.data); // Assuming the API returns an array of objects
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        fetchDataTechnicalReviewer();
    }, []); // Runs once on component mount


    // to get the dropdown options from datbase for ta expert
    // useEffect(() => {
    //     const fetchDataTaExpert = async () => {
    //         try {
    //             const responsetaexpert = await axios.get(`${get_assesment_url}`);
    //             const filteredData = responsetaexpert.data.data.filter(option => option.designation_id === 8);
    //             setTaExpert(filteredData);  // Assuming the API returns an array of objects
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //         setLoading(false);
    //     };

    //     fetchDataTaExpert();
    // }, []); // Runs once on component mount



    //      // to get the dropdown options from datbase for validator
    //     useEffect(() => {
    //         const fetchDataValidator = async () => {
    //             try {
    //                 const responsevalidator = await axios.get(`${get_validator_url}`);
    //                 setValidator(responsevalidator.data.data); // Assuming the API returns an array of objects
    //             } catch (error) {
    //                 console.error('Error fetching data:', error);
    //             }
    //             setLoading(false);
    //         };

    //         fetchDataValidator();
    //     }, []); // Runs once on component mount


    //      // to get the dropdown options from datbase for finance expert
    //     useEffect(() => {
    //         const fetchDataFinanceExpert = async () => {
    //             try {
    //                 const responsefinanceexpert = await axios.get(`${get_finace_expert_url}`);
    //                 setFinanaceExpert(responsefinanceexpert.data.data); // Assuming the API returns an array of objects
    //             } catch (error) {
    //                 console.error('Error fetching data:', error);
    //             }
    //             setLoading(false);
    //         };

    //         fetchDataFinanceExpert();
    //     }, []); // Runs once on component mount


    //      // to get the dropdown options from datbase for tecnicalreviewer
    //     useEffect(() => {
    //         const fetchDataTechnicalReviewer = async () => {
    //             try {
    //                 const responsetechnicalreviewer = await axios.get(`${get_technical_reviewer_url}`);
    //                 setTechnicalReviewer(responsetechnicalreviewer.data.data); // Assuming the API returns an array of objects
    //             } catch (error) {
    //                 console.error('Error fetching data:', error);
    //             }
    //             setLoading(false);
    //         };

    //         fetchDataTechnicalReviewer();
    //     }, []); // Runs once on component mount


    //      // to get the dropdown options from datbase for math expert
    //     useEffect(() => {
    //         const fetchDataMathExpert = async () => {
    //             try {
    //                 const responsetechnicalreviewer = await axios.get(`${get_math_expert_url}`);
    //                 setMathExpert(responsetechnicalreviewer.data.data); // Assuming the API returns an array of objects
    //             } catch (error) {
    //                 console.error('Error fetching data:', error);
    //             }
    //             setLoading(false);
    //         };

    //         fetchDataMathExpert();
    //     }, []); // Runs once on component mount



    //      // to get the dropdown options from datbase for local expert
    //     useEffect(() => {
    //         const fetchDataLocalExpert = async () => {
    //             try {
    //                 const responselocalexpert = await axios.get(`${get_local_expert_url}`);
    //                 setLocalExpert(responselocalexpert.data.data); // Assuming the API returns an array of objects
    //             } catch (error) {
    //                 console.error('Error fetching data:', error);
    //             }
    //             setLoading(false);
    //         };

    //         fetchDataLocalExpert();
    //     }, []); // Runs once on component mount



    //      // to get the dropdown options from datbase for trainee validator
    //     useEffect(() => {
    //         const fetchDataTraineeValidator = async () => {
    //             try {
    //                 const responsetraineevalidator = await axios.get(`${get_trainee_validator_url}`);
    //                 setTraineeValidator(responsetraineevalidator.data.data); // Assuming the API returns an array of objects
    //             } catch (error) {
    //                 console.error('Error fetching data:', error);
    //             }
    //             setLoading(false);
    //         };

    //     fetchDataTraineeValidator();
    // }, []); // Runs once on component mount



    return (
        <>

            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-12">
                        <h2 className='text-center textcolorblue fw-bolder p-2 text-capitalize bg-light'>project details</h2>
                        <Tabs defaultActiveKey='1' activeKey={activeTab} centered
                            indicator={{ Backgroundcolor: '#07B6AF' }}
                            size='large'
                        >
                            <Tabs.items tab={
                                <div className='border-0 shadow-lg textlightgreen rounded-0 px-5 py-2 text-center'>
                                    <p>Project Details</p>
                                </div>

                            } key="1">
                                {/* tab 1 project info form */}
                                <form onSubmit={handleSubmit} method='POST'>
                                    <div className='col-10 border-0 bg-white shadow-sm p-5 mx-auto'>
                                        {/* row 1 */}
                                        <div className="row">
                                            <div className="col-4 mb-3">
                                                <label for="projectname" className="form-label">Project Name*</label>
                                                <input type="text" className="form-control borderlightgreen" id="project_name" placeholder="Project Name" required name="project_name" onChange={handleMyProjectChange} value={myprojectName} />
                                                {error && <div className="error text-danger">{error}</div>}
                                            </div>
                                            <div className="col-4 mb-3">
                                                <label for="eid" className="form-label">Earthood Id*</label>
                                                <input type="text" className= {`form-control borderlightgreen ${earthoodIdError ? 'is-invalid' : ''}`} id="earthood_id" placeholder="Earthood Id" name="earthood_id" required value={earthoodId}
                                                    onChange={handleEarthoodIdChange} />
                                                     {earthoodIdError && <div className="invalid-feedback text-danger">{earthoodIdError}</div>}
                                            </div>
                                            <div className="col-4 mb-3">
                                                <label for="clientname" className="form-label">Client Name </label>
                                                {loading ? (
                                                    <p>Loading...</p>
                                                )
                                                    : (
                                                        <select id="client_id" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="client_id" >
                                                            <option selected value={''}>Select Client Name</option>
                                                            {clientName.map(option => (
                                                                <option key={option.id} value={option.id}>{option.name}</option>
                                                            ))}
                                                        </select>
                                                    )}
                                            </div>
                                        </div>
                                        {/* row 2 */}
                                        <div className="row">
                                            <div className="col-4 mb-3">
                                                <label htmlFor="country" className="form-label" required>Country*</label>
                                                {loading ? (
                                                    <p>Loading...</p>
                                                )
                                                    : (
                                                        <select id="country" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="country">
                                                            <option selected value={''}>Select Country</option>
                                                            {country.map(option => (
                                                                <option key={option.id} value={option.id}>
                                                                    {option.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    )}
                                            </div>
                                            <div className="col-4 mb-3">
                                                <label for="Program" className="form-label">Program*</label>
                                                {loading ? (
                                                    <p>Loading...</p>
                                                )
                                                    : (
                                                        <select id="program" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="program" >
                                                            <option selected value={''}>Select Program</option>
                                                            {program.map(option => (
                                                                <option key={option.id} value={option.id}>
                                                                    {option.program_name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    )}
                                            </div>
                                            <div className="col-4 mb-3">
                                                <label for="Program Id" className="form-label">Program Id*</label>
                                                <input type="text" className="form-control borderlightgreen" id="program_id" placeholder="Program Id" required name="program_id" />
                                            </div>
                                        </div>
                                        {/* row 3 */}
                                        <div className="row">
                                            <div className="col-4 mb-3">
                                                <label for="Implementation Fees" className="form-label">Implementation Fees*</label>
                                                <input type="number" className="form-control borderlightgreen" id="implemented_fees" placeholder="Implementation Fees" required name="implemented_fees" min={0} />
                                            </div>
                                            <div className="col-4 mb-3">
                                                <label for="Proposal Date" className="form-label">Proposal Date*</label>
                                                <input type="date" className="form-control borderlightgreen" id="proposaldate" required name="proposaldate" />
                                            </div>
                                            <div className="col-4 mb-3">
                                                <label for="Scope" className="form-label">Scope*</label>
                                                {loading ? (
                                                    <p>Loading...</p>
                                                )
                                                    : (
                                                        <select id="scope" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="scope" >
                                                            <option selected value={''}>Select Scope</option>
                                                            {myscope.map(option => (
                                                                <option key={option.id} value={option.id}>
                                                                    {option.scope}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    )}
                                            </div>
                                        </div>

                                        {/* row 4 */}
                                        <div className="row">
                                            <div className="col-4 mb-3">
                                                <label for="Scope(PO/POA)" className="form-label">Scope(PO/POA)*</label>
                                                <select id="scope_pa" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="scope_pa">
                                                    <option selected>Select Scope PO/POA</option>
                                                    <option value={1}>PO</option>
                                                    <option value={2}>POA</option>
                                                </select>
                                            </div>
                                            <div className="col-4 mb-3">

                                                <div>
                                                    <label for="Sectoral Scope" className="form-label">Sectoral Scope*</label>

                                                    {loading ? (
                                                        <p>Loading...</p>
                                                    )
                                                        : (
                                                            <select id="sectoral_scope" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="sectoral_scope" >
                                                                <option selected value={''}>Sectoral Scope</option>
                                                                {sectoralScope.map(option => (
                                                                    <option key={option.id} value={option.id}>{option.sector_name}</option>
                                                                ))}
                                                            </select>
                                                        )}

                                                </div>
                                            </div>
                                            {/* row 5 */}
                                            <p className='textlightgreen fw-bold m-3'>Assessment Team</p>
                                            <hr />
                                            <div className="row">
                                                <div className="col-4 mb-3">
                                                    <label for="teamleader" className="form-label">Team Leader*</label>
                                                    {loading ? (
                                                        <p>Loading...</p>
                                                    )
                                                        : (
                                                            <select id="team_leader" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="team_leader" required>
                                                                <option selected value={''}>Select Team Leaders</option>
                                                                {atlist.filter(option => option.designation_id === 8).map(option => (
                                                                    <option key={option.id} value={option.id}>{option.name}</option>
                                                                ))}
                                                            </select>
                                                        )}

                                                </div>
                                                <div className="col-4 mb-3">
                                                    <label for="taexpert" className="form-label">Select TA Expert*</label>
                                                    {loading ? (
                                                        <p>Loading...</p>
                                                    )
                                                        : (
                                                            <select id="ta_expert" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="ta_expert" required>
                                                                <option selected value={''}>Select TA Expert</option>
                                                                {atlist.filter(option => option.designation_id === 8).map(option => (
                                                                    <option key={option.id} value={option.id}>{option.name}</option>
                                                                ))}
                                                            </select>
                                                        )}
                                                </div>
                                                <div className="col-4 mb-3">
                                                    <label for="validator" className="form-label">Validator</label>
                                                    {loading ? (
                                                        <p>Loading...</p>
                                                    )
                                                        : (
                                                            <select id="validator_verifier" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="validator_verifier" >
                                                                <option selected value={''}>Select Validator</option>
                                                                {atlist.filter(option => option.designation_id === 8).map(option => (
                                                                    <option key={option.id} value={option.id}>{option.name}</option>
                                                                ))}
                                                            </select>
                                                        )}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4 mb-3">
                                                    <label for="financeexpert" className="form-label">Finance Expert</label>
                                                    {loading ? (
                                                        <p>Loading...</p>
                                                    )
                                                        : (
                                                            <select id="finance_expert" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="finance_expert"  >
                                                                <option selected value={''}>Select Finance Experts</option>
                                                                {atlist.filter(option => option.designation_id === 8).map(option => (
                                                                    <option key={option.id} value={option.id}>{option.name}</option>
                                                                ))}
                                                            </select>
                                                        )}
                                                </div>
                                                <div className="col-4 mb-3">
                                                    <label for="teamleader" className="form-label">Local Expert</label>
                                                    {loading ? (
                                                        <p>Loading...</p>
                                                    )
                                                        : (
                                                            <select id="local_expert" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="local_expert" >
                                                                <option selected value={''}>Local Experts</option>
                                                                {atlist.filter(option => option.designation_id === 8).map(option => (
                                                                    <option key={option.id} value={option.id}>{option.name}</option>
                                                                ))}
                                                            </select>
                                                        )}
                                                </div>
                                                <div className="col-4 mb-3">
                                                    <label for="mathexpert" className="form-label">Math Expert</label>
                                                    {loading ? (
                                                        <p>Loading...</p>
                                                    )
                                                        : (
                                                            <select id="math_expert" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="math_expert"  >
                                                                <option selected value={''}>Select Math Expert</option>
                                                                {atlist.filter(option => option.designation_id === 8).map(option => (
                                                                    <option key={option.id} value={option.id}>{option.name}</option>
                                                                ))}
                                                            </select>
                                                        )}
                                                </div>
                                            </div>
                                            <div className="row">

                                                <div className="col-4 mb-3">
                                                    <label for="taexpert" className="form-label">Trainee Validator</label>
                                                    {loading ? (
                                                        <p>Loading...</p>
                                                    )
                                                        : (
                                                            <select id="trainee_validator" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="trainee_validator" >
                                                                <option selected value={''}>Select Trainee Validators</option>
                                                                {atlist.filter(option => option.designation_id === 8).map(option => (
                                                                    <option key={option.id} value={option.id}>{option.name}</option>
                                                                ))}
                                                            </select>
                                                        )}
                                                </div>
                                                <div className="col-4 mb-3">
                                                    <label for="technicalreviewer" className="form-label">Technical Reviewer*</label>
                                                    {loading ? (
                                                        <p>Loading...</p>
                                                    )
                                                        : (
                                                            <select id="technical_reviewer" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" name="technical_reviewer" required>
                                                                <option selected value={''}>Select Technical Reviewer</option>
                                                                {atlist.filter(option => option.designation_id === 7).map(option => (
                                                                    <option key={option.id} value={option.id}>{option.name}</option>
                                                                ))}
                                                            </select>
                                                        )}
                                                </div>
                                                <div>
                                                    <button type="submit" class="btn btn-outline-primary" >Save & Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Tabs.items>
                            <Tabs.items tab={
                                <div className='border-0 shadow-lg textlightgreen rounded-0 px-5 py-2 text-center'>
                                    <p>Attachment</p>
                                </div>
                            } key="2">
                                {/* tab 2 project attachment form */}
                                <div className='col-10 border-0 bg-white shadow-sm p-5 mx-auto'>
                                    <form onSubmit={handleSubmitFile} method='POST' enctype='multipart/form-data'>
                                        <table className='table table-bordered table-responsive'>
                                            <thead>
                                                <tr>
                                                    <th>Document name </th>
                                                    <th>Select File</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>F20 Document</td>
                                                    <td> <input class="form-control" type="file" id="formFileMultiple" name='f20_doc' /></td>
                                                </tr>
                                                <tr>
                                                    <td>F21 Document</td>
                                                    <td><input class="form-control" type="file" name='f21_doc' id="formFileMultiple" /></td>
                                                </tr>
                                                <tr>
                                                    <td>F23 Document</td>
                                                    <td><input class="form-control" type="file" name='f23_doc' id="formFileMultiple" /></td>
                                                </tr>
                                                <tr>
                                                    <td>C01 Document</td>

                                                    <td><input class="form-control" type="file" name='coi_doc' id="formFileMultiple" /></td>

                                                    {/* <Dragger {...props}>
                                                        <p className="ant-upload-drag-icon">
                                                            <InboxOutlined />
                                                        </p>
                                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                       
                                                    </Dragger> */}

                                                </tr>
                                            </tbody>
                                        </table>
                                        <button onClick={handleBackToTab1} className="btn btn-outline-primary">Back</button>
                                        <button style={{ marginLeft: '10px' }} type="submit" class="btn btn-outline-primary" >Save</button>
                                    </form>
                                </div>

                            </Tabs.items>
                        </Tabs>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AddProject
