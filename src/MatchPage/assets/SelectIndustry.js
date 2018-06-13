import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MatchPage from '../MatchPage';
import { Flex, Box } from 'grid-styled';
import {FormControl} from 'react-bootstrap';

// assets
import MatchSelector from './MatchSelector';

const industries=['Software', 'Health Care', 'Mobile', 'Biotechnology', 'Enterprise Software', 'E-Commerce', 'Internet', 'Information Technology', 'SaaS', 'Medical', 'Analytics', 'Manufacturing', 'Apps', 'Advertising', 'Medical Device', 'Social Media', 'Financial Services', 'Education', 'Finance', 'FinTech', 'Big Data', 'Hardware', 'Pharmaceutical', 'Security', 'Artificial Intelligence', 'Cloud Computing', 'Video', 'Retail', 'Therapeutics', 'Health Diagnostics', 'Internet of Things', 'Service Industry', 'Travel', 'Marketplace', 'Telecommunications', 'Electronics', 'Mobile Apps', 'Wireless', 'Energy', 'Machine Learning', 'Fashion', 'Digital Media', 'Real Estate', 'Marketing', 'Automotive', 'Information Services', 'Consumer Electronics', 'Transportation', 'Payments', 'B2B', 'Content', 'Sports', 'Music', 'Search Engine', 'Food and Beverage', 'Messaging', 'Consulting', 'Semiconductor', 'Gaming', 'iOS', 'Shopping', 'Computer', 'Hospitality', 'Media and Entertainment', 'Cyber Security', 'Web Hosting', 'Logistics', 'Renewable Energy', 'Business Intelligence', 'EdTech', 'Real Time', 'Publishing', 'Robotics', 'Collaboration', 'Fitness', 'Lifestyle', 'Online Portals', 'News', 'Developer Tools', 'Human Resources', 'Recruiting', 'Events', 'Customer Service', 'Social Network', 'Web Development', 'Wellness', 'CRM', 'Android', 'Industrial', 'Consumer', 'Developer Platform', 'Genetics', 'Network Security', 'Restaurants', 'Product Design', 'Biopharma', 'Life Science', 'Solar']

// const industries = ['Delivery Service',
//                     'Consumer Goods',
//                     'Autonomous Vehicles',
//                     'Social Assistance',
//                     'Machinery Manufacturing',
//                     'Home Health Care',
//                     'Industrial Manufacturing',
//                     'Office Administration',
//                     'Facilities Support Services',
//                     'Building Maintenance',
//                     'Online Games',
//                     'Commercial',
//                     'Staffing Agency',
//                     'Secondary Education',
//                     'Digital Marketing',
//                     'Sales',
//                     'Generation Y',
//                     'DRM',
//                     'Internet Radio',
//                     'Peer to Peer',
//                     'Fuel',
//                     'Biopharma',
//                     'Renewable Energy',
//                     'Video Advertising',
//                     'Gaming',
//                     'Local Business',
//                     'Rental Property',
//                     'Higher Education',
//                     'Virtual World',
//                     'Chemical',
//                     "Women's",
//                     'Consumer',
//                      "Men's",
//                     'Food and Beverage',
//                     'Database',
//                     'Continuing Education',
//                     'Marijuana',
//                     'Personal Development',
//                     'Mechanical Design',
//                     'Productivity Tools',
//                     'Scheduling',
//                     'Children',
//                     'Baby',
//                     'Pharmaceutical',
//                     'Asset Management',
//                     'Virtual Workforce',
//                     'Consumer Research',
//                     'Courier Service',
//                     'Marketing',
//                     'Government',
//                     'Social Network',
//                     'Social',
//                     'Marketplace',
//                     'Rental',
//                     'Computer',
//                     'Electric Vehicle'];

class SelectIndustry extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selected: new Set([]),
            search_term: '',
            active_industries: industries
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSelect(label){
        if(this.state.selected.has(label)){
            this.state.selected.delete(label)
        }else{
            this.state.selected.add(label)
        }
        this.props.updateFlow({selectedIndustry: this.state.selected})
    }

    filterIndustries(str){
        const exp = RegExp(str, 'gi')
        return industries.filter(industry => exp.test(industry))
    }

    handleChange(e){
        const str = e.target.value
        this.setState({search_term: e});
        if(str==''){
            this.setState({active_industries: industries})
        }else{
            this.setState({active_industries: this.filterIndustries(str)})
        }
    }

    render(){
        console.log('S', this.state.selected);
        const industry_list = [...this.state.selected];
        return(
                // <Box width={1}>
                //
                //     <Flex justifyContent='center'>
                //         <Box width={1/2}>
                //             <Flex justifyContent='space-between'>
                //                 < MatchSelector label='Investor' size='lg'/>
                //                 < MatchSelector label='Hire' size='lg'/>
                //                 < MatchSelector label='Advisor' size='lg'/>
                //             </Flex>
                //         </Box>
                //     </Flex>
                // </Box>
            <Box width={1}>
                <div className='text-center'>
                  <h2>What is your industry?</h2>
                            <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                  />
                </div>
                <Flex justifyContent='space-evenly' flexWrap='wrap'>
                    {industry_list.map((industry) =>
                        < MatchSelector clicked='true' key={industry} label={industry} size='sm' handleSelect={this.handleSelect}/>
                    )}
                </Flex>
                <Flex justifyContent='space-evenly' flexWrap='wrap'>
                    {this.state.active_industries.map((industry) => {
                        if(!this.state.selected.has(industry)){
                            return(< MatchSelector key={industry} label={industry} size='sm' handleSelect={this.handleSelect}/>);
                        }
                    })}
                </Flex>
            </Box>
        )
    }
}

export default SelectIndustry;
