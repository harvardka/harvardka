import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MatchPage from '../MatchPage';
import { Flex, Box } from 'grid-styled';
import {FormControl} from 'react-bootstrap';

// assets
import MatchSelector from './MatchSelector';

//limited industries
// const industries=['Software', 'Health Care', 'Mobile', 'Biotechnology', 'Enterprise Software', 'E-Commerce', 'Internet', 'Information Technology', 'SaaS', 'Medical', 'Analytics', 'Manufacturing', 'Apps', 'Advertising', 'Medical Device', 'Social Media', 'Financial Services', 'Education', 'Finance', 'FinTech', 'Big Data', 'Hardware', 'Pharmaceutical', 'Security', 'Artificial Intelligence', 'Cloud Computing', 'Video', 'Retail', 'Therapeutics', 'Health Diagnostics', 'Internet of Things', 'Service Industry', 'Travel', 'Marketplace', 'Telecommunications', 'Electronics', 'Mobile Apps', 'Wireless', 'Energy', 'Machine Learning', 'Fashion', 'Digital Media', 'Real Estate', 'Marketing', 'Automotive', 'Information Services', 'Consumer Electronics', 'Transportation', 'Payments', 'B2B', 'Content', 'Sports', 'Music', 'Search Engine', 'Food and Beverage', 'Messaging', 'Consulting', 'Semiconductor', 'Gaming', 'iOS', 'Shopping', 'Computer', 'Hospitality', 'Media and Entertainment', 'Cyber Security', 'Web Hosting', 'Logistics', 'Renewable Energy', 'Business Intelligence', 'EdTech', 'Real Time', 'Publishing', 'Robotics', 'Collaboration', 'Fitness', 'Lifestyle', 'Online Portals', 'News', 'Developer Tools', 'Human Resources', 'Recruiting', 'Events', 'Customer Service', 'Social Network', 'Web Development', 'Wellness', 'CRM', 'Android', 'Industrial', 'Consumer', 'Developer Platform', 'Genetics', 'Network Security', 'Restaurants', 'Product Design', 'Biopharma', 'Life Science', 'Solar']

// all industries
const industries = ['Software', 'Health Care', 'Mobile', 'Biotechnology', 'Enterprise Software', 'E-Commerce', 'Internet', 'Information Technology', 'SaaS', 'Medical', 'Analytics', 'Manufacturing', 'Apps', 'Advertising', 'Medical Device', 'Social Media', 'Financial Services', 'Education', 'Finance', 'FinTech', 'Big Data', 'Hardware', 'Pharmaceutical', 'Security', 'Artificial Intelligence', 'Cloud Computing', 'Video', 'Retail', 'Therapeutics', 'Health Diagnostics', 'Internet of Things', 'Service Industry', 'Travel', 'Marketplace', 'Telecommunications', 'Electronics', 'Mobile Apps', 'Wireless', 'Energy', 'Machine Learning', 'Fashion', 'Digital Media', 'Real Estate', 'Marketing', 'Automotive', 'Information Services', 'Consumer Electronics', 'Transportation', 'Payments', 'B2B', 'Content', 'Sports', 'Music', 'Search Engine', 'Food and Beverage', 'Messaging', 'Consulting', 'Semiconductor', 'Gaming', 'iOS', 'Shopping', 'Computer', 'Hospitality', 'Media and Entertainment', 'Cyber Security', 'Web Hosting', 'Logistics', 'Renewable Energy', 'Business Intelligence', 'EdTech', 'Real Time', 'Publishing', 'Robotics', 'Collaboration', 'Fitness', 'Lifestyle', 'Online Portals', 'News', 'Developer Tools', 'Human Resources', 'Recruiting', 'Events', 'Customer Service', 'Social Network', 'Web Development', 'Wellness', 'CRM', 'Android', 'Industrial', 'Consumer', 'Developer Platform', 'Genetics', 'Network Security', 'Restaurants', 'Product Design', 'Biopharma', 'Life Science', 'Solar', 'Location Based Services', 'Advertising Platforms', 'Predictive Analytics', 'Photography', 'Banking', 'Brand Marketing', 'Marketing Automation', 'Video Streaming', 'Small and Medium Businesses', 'Hospital', 'Communities', 'Wearables', 'Mobile Payments', 'Energy Efficiency', 'Agriculture', 'Cloud Data Services', 'Retail Technology', 'E-Learning', 'Video Games', 'Infrastructure', 'Oil and Gas', 'Insurance', 'Digital Entertainment', 'Tourism', 'Business Development', 'Market Research', 'Local', 'Virtual Reality', 'Supply Chain Management', 'Food Processing', '3D Technology', 'Training', 'mHealth', 'CleanTech', 'Social Media Marketing', 'Clean Energy', 'Communications Infrastructure', 'Delivery', 'Construction', 'Developer APIs', 'Augmented Reality', 'Nanotechnology', 'Crowdsourcing', 'Professional Services', 'Data Visualization', 'Non Profit', 'Beauty', 'Risk Management', 'Open Source', 'Legal', 'Aerospace', 'Database', 'Sensor', 'Venture Capital', 'Personal Health', 'Digital Marketing', 'E-Commerce Platforms', 'Crowdfunding', 'Innovation Management', 'Social', 'Audio', 'Chemical', 'Email', 'Virtualization', 'Energy Management', 'Data Integration', 'Identity Management', 'Mobile Devices', 'Mobile Advertising', 'Personalization', 'Consumer Goods', 'Computer Vision', 'Broadcasting', 'Cloud Infrastructure', 'Clinical Trials', 'Water', 'Personal Finance', 'Bitcoin', 'Employment', 'Data Center', 'Loyalty Programs', 'Art', 'Leisure', 'Photo Sharing', 'Web Design', 'Ticketing', 'Accounting', 'File Sharing', 'Smart Home', 'Project Management', 'Sustainability', 'Online Games', 'VoIP', 'Drones', 'Web Browsers', 'Sales', 'Food Delivery', 'Public Transportation', 'Property Management', 'Public Relations', 'Farming', 'Enterprise', 'Event Management', 'Navigation', 'Commercial Real Estate', 'PaaS', 'Industrial Automation', '3D Printing', 'Document Management', 'Email Marketing', 'Energy Storage', 'Credit', 'Children', 'Career Planning', 'Gamification', 'Outsourcing', 'Lead Generation', 'Advanced Materials', 'Subscription Service', 'Cloud Management', 'Natural Language Processing', 'Enterprise Applications', 'Lending', 'SEO', 'Blockchain', 'Wine And Spirits', 'Lighting', 'Data Storage', 'Trading Platform', 'Film', 'Peer to Peer', 'Ad Network', 'Universities', 'Web Apps', 'Network Hardware', 'Sales Automation', 'Blogging Platforms', 'Natural Resources', 'TV', 'Data Mining', 'Environmental Engineering', 'Language Learning', "Women's", 'Cloud Security', 'Electric Vehicle', 'Rental', 'Coupons', 'Organic Food', 'Government', 'Printing', 'Industrial Engineering', 'Cryptocurrency', 'Management Information Systems', 'Point of Sale', 'Nutrition', 'Optical Communication', 'Autonomous Vehicles', 'Knowledge Management', 'Image Recognition', 'Shipping', 'Mechanical Engineering', 'Content Delivery Network', 'Neuroscience', 'Higher Education', 'Recycling', 'Smart Building', 'Social Media Management', 'Home Decor', 'Test and Measurement', 'Furniture', 'Waste Management', 'GreenTech', 'Compliance', 'Ad Targeting', 'Private Social Networking', 'Pet', 'Sharing Economy', 'Commercial', 'Parenting', 'Architecture', 'Collaborative Consumption', 'Wealth Management', 'Online Auctions', 'Public Safety', 'Ride Sharing', 'Application Performance Management', 'Price Comparison', 'Management Consulting', 'Cosmetics', 'App Marketing', 'GovTech', 'Intellectual Property', 'Content Discovery', 'Jewelry', 'Hotel', 'Billing', 'IT Management', 'Video on Demand', 'Fraud Detection', 'Privacy', 'Sporting Goods', 'Content Creators', 'Asset Management', 'Gift Card', 'Professional Networking', 'Tutoring', 'Fuel', 'Content Marketing', 'Advice', 'Electrical Distribution', 'PC Games', 'Ediscovery', 'AgTech', 'RFID', 'IaaS', 'Real Estate Investment', 'Battery', 'Water Purification', 'IT Infrastructure', 'SMS', 'Machinery Manufacturing', 'Biometrics', 'Software Engineering', 'Industrial Manufacturing', 'Digital Signage', 'Incubators', 'Wholesale', 'Productivity Tools', 'ISP', 'Auctions', 'Consumer Lending', 'EBooks', 'Home Renovation', 'Semantic Search', 'Building Material', 'Geospatial', 'Interior Design', 'Diabetes', 'Impact Investing', 'Flash Storage', 'Social Entrepreneurship', 'National Security', 'Air Transportation', 'Car Sharing', 'eSports', 'Parking', 'Home Services', 'Task Management', 'Corporate Training', 'Grocery', 'Child Care', 'Cooking', 'Dental', 'Communication Hardware', 'Credit Cards', 'Toys', 'Video Conferencing', 'Delivery Service', 'Intelligent Systems', 'B2C', 'Dating', 'Coworking', 'Casual Games', 'Reservations', 'Graphic Design', 'Classifieds', 'Charity', 'Product Research', 'Shoes', 'Embedded Systems', 'Speech Recognition', 'Employee Benefits', 'Business Information Systems', 'Text Analytics', 'Wind Energy', 'Video Chat', 'Fleet Management', 'Transaction Processing', 'Technical Support', 'Eyewear', 'Consumer Software', 'Contact Management', 'Skill Assessment', 'Music Streaming', 'Social Media Advertising', 'Staffing Agency', 'Elder Care', 'Power Grid', 'Coffee', 'Financial Exchanges', 'Adventure Travel', 'Visual Search', 'Social CRM', 'Outdoors', 'Scheduling', 'Textiles', 'Cloud Storage', 'Mapping Services', 'Social Recruiting', 'Meeting Software', 'Journalism', 'Reputation', 'Wedding', 'Biofuel', 'Bioinformatics', 'Virtual Currency', 'Stock Exchanges', 'Procurement', 'Health Insurance', 'Gambling', 'Home Health Care', 'Craft Beer', 'InsurTech', 'Human Computer Interaction', 'Local Advertising', 'Video Advertising', 'Rental Property', 'Guides', 'Concerts', 'Direct Marketing', 'Law Enforcement', 'Film Production', 'Home Improvement', 'Local Business', 'Product Search', 'Semantic Web', 'Freelance', 'Mining Technology', 'Organic', 'Politics', 'Angel Investment', 'Dietary Supplements', 'Internet Radio', 'Psychology', 'Family', 'Environmental Consulting', 'Satellite Communication', 'Fantasy Sports', 'Nightlife', 'Emerging Markets', 'Laser', 'Travel Accommodations', 'Animation', 'Private Cloud', 'ERP', 'Veterinary', 'Homeland Security', 'Auto Insurance', 'Social Innovation', 'NFC', 'Consumer Reviews', 'Lead Management', 'DSP', 'Social News', 'Brewing', 'Packaging Services', 'TV Production', 'Data Center Automation', 'Mining', 'Call Center', 'Simulation', 'Photo Editing', 'MMO Games', 'Presentations', 'Content Syndication', 'Plastics and Rubber Manufacturing', 'Same Day Delivery', 'Product Management', 'Green Consumer Goods', 'ICT', 'Browser Extensions', 'Baby', 'Video Editing', 'Funding Platform', 'CAD', 'GPS', 'Unified Communications', 'Gift', 'Mineral', 'Travel Agency', 'Precious Metals', 'Green Building', 'Direct Sales', 'Biomass Energy', 'Space Travel', 'Facial Recognition', 'Virtual Assistant', "Men's", 'DIY', 'Ad Retargeting', 'UX Design', 'Physical Security', 'Social Bookmarking', 'Indoor Positioning', 'Alternative Medicine', 'Residential', 'Animal Feed', 'Hedge Funds', 'Consumer Applications', 'Property Development', 'Podcast', 'College Recruiting', 'Leasing', 'Recreation', 'Operating Systems', 'Association', 'Marine Transportation', 'Celebrity', 'Civil Engineering', 'Business Travel', 'Creative Agency', 'Handmade', 'Self-Storage', 'Ethereum', 'Marijuana', 'STEM Education', 'Soccer', 'Social Shopping', 'Linux', 'Cycling', 'Drone Management', 'Freight Service', 'QR Codes', 'Facebook', 'Translation Service', 'Freemium', 'Hydroponics', 'Music Venues', 'SEM', 'Embedded Software', 'Virtual Desktop', 'Reading Apps', 'Music Education', 'Nightclubs', 'Taxi Service', 'Sponsorship', 'Consumer Research', 'Aquaculture', 'FMCG', 'Young Adults', 'Micro Lending', 'Chemical Engineering', 'EDA', 'Q&A', 'Quality Assurance', 'Life Insurance', 'Elderly', 'Snack Food', 'Outdoor Advertising', 'Nutraceutical', 'Farmers Market', 'Home and Garden', 'Facility Management', 'Laundry and Dry-cleaning', 'Housekeeping Service', 'Rehabilitation', 'Group Buying', 'Collectibles', 'App Discovery', 'Online Forums', 'Tea', 'Edutainment', 'Theatre', 'Fertility', 'Musical Instruments', 'Vacation Rental', 'Virtual World', 'Property Insurance', 'Humanitarian', 'Warehousing', 'Ad Server', 'Emergency Medicine', 'Virtual Workforce', 'Courier Service', 'Affiliate Marketing', 'Quantified Self', 'Event Promotion', 'Personal Branding', 'Intrusion Detection', 'Flowers', 'Resorts', 'Fuel Cell', 'Building Maintenance', 'Office Administration', 'Alumni', 'Railroad', 'Commercial Lending', 'Ad Exchange', 'Independent Music', 'Mechanical Design', 'Primary Education', 'Motion Capture', 'Lingerie', 'Assistive Technology', 'A/B Testing', 'Comics', 'Facilities Support Services', 'Virtual Goods', 'Debit Cards', 'Boating', 'Film Distribution', 'Charter Schools', 'Secondary Education', 'Vertical Search', 'MOOC', 'Religion', 'Assisted Living', 'Retirement', 'EHR', 'Cosmetic Surgery', 'Fruit', 'GPU', 'Racing', 'Catering', 'Teenagers', 'Bakery', 'Performing Arts', 'Livestock', 'Personal Development', 'Casino', 'E-Signature', 'Mothers', 'Google Glass', 'Winery', 'Usability Testing', 'CMS', 'FPGA', 'Serious Games', 'Paper Manufacturing', 'Pollution Control', 'Franchise', 'Wired Telecommunications', 'Field Support', 'Golf', 'Millennials', 'Recipes', 'Domain Registrar', 'SNS', 'Wood Processing', 'Continuing Education', 'Document Preparation', 'Commercial Insurance', 'Cause Marketing', 'Vending and Concessions', 'Industrial Design', 'LGBT', 'Credit Bureau', 'Nursing and Residential Care', 'Presentation Software', 'Landscaping', 'Penetration Testing', 'Local Shopping', 'Funerals', 'Fossil Fuels', 'Windows', 'Museums and Historical Sites', 'Music Label', 'Shipping Broker', 'Sex Tech', 'Debt Collections', 'Forestry', 'Contests', 'Recreational Vehicles', 'DRM', 'Gift Exchange', 'In-Flight Entertainment', 'Seafood', 'Swimming', 'Audiobooks', 'Adult', 'Spam Filtering', 'Homeless Shelter', 'CivicTech', 'Water Transportation', 'American Football', 'Diving', 'Desktop Apps', 'Underserved Children', 'Janitorial Service', 'Multi-level Marketing', 'Sailing', 'Outpatient Care', 'Gift Registry', 'Nuclear', 'Distillery', 'Basketball', 'Archiving Service', 'Military', 'Skiing', 'Shopping Mall', 'Textbook', 'WebOS', 'Made to Order', 'Tour Operator', 'Confectionery', 'Amusement Park and Arcade', 'Timeshare', 'Food Trucks', 'Prediction Markets', 'Console Games', 'Tobacco', 'Tennis', 'Playstation', 'Trade Shows', 'Google', 'Generation Z', 'Sex Industry', 'ASIC', 'Horticulture', 'Baseball', 'Social Assistance', 'Vocational Education', 'Twitter', 'Windows Phone', 'Generation Y', 'Timber', 'Hunting', 'Limousine Service', 'macOS', 'Hockey', 'Corrections Facilities', 'Foundries', 'Ports and Harbors', 'Parks', 'First Aid', 'Surfing', 'Rugby', 'Darknet', 'Cricket', 'Table Tennis', 'Flash Sale', 'Ferry Service', 'Collection Agency', 'Equestrian']


class SelectIndustry extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selected: new Set([]),
            search_term: '',
            active_industries: []
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
        return industries.filter(industry => exp.test(industry)).slice(0,20)
    }

    handleChange(e){
        const str = e.target.value
        this.setState({search_term: e});
        if(str==''){
            this.setState({active_industries:[]})
        }else{
            this.setState({active_industries: this.filterIndustries(str)})
        }
    }

    render(){
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
                  <h2>What are your industries?</h2>
                            <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Find your industry"
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
