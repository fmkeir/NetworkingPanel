// import React, {Component} from 'react';
import DeviceDetail from './DeviceDetail.js'
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertibal-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.pallete.backgroundColor.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        // borderRight: `1px solid ${theme.pallete.divider}`, 
    }
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    return (
        <div className={classes.root}>
            <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </div>
    );
}
// class DeviceList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             open: false
//         }
//     }

//     openTab(pageName) {
//         let tabIndex, tabcontent, tablinks;
  
//         tabcontent = document.getElementsByClassName("tabcontent");
//         for (tabIndex = 0; tabIndex < tabcontent.length; tabIndex++) {
//           tabcontent[tabIndex].style.display = "none";
//         }
  
//         tablinks = document.getElementsByClassName("tablinks");
//         for (tabIndex = 0; tabIndex < tablinks.length; tabIndex++) {
//           tablinks[tabIndex].className = tablinks[tabIndex].className.replace(" active", "");
//         }
  
//         document.getElementById(pageName).style.display = "block";
//         // pageName.className += " active";
//         console.log("clicked")
//       }
      
//     closeTab(pageName) {
//         document.getElementById(pageName).style.display = "none";
//     }
      
//       //   openDefaultTab(tabId) {
//     //     document.getElementById(tabId).click();
//     //   }

//     render() {
//         const deviceNames = this.props.devices.map(device => {
//             return (
//                 <div className="tab">
//                     <div>
//                         <button className="tablinks" onClick={()=>this.openTab(device.host_name)}>{device.host_name}</button>
//                         <img src={device.snap_shots[device.snap_shots.length - 1].active_connection ? "../images/connected.png" : "../images/disconnected.png"} alt={this.props.activeConnection ? "Connected" : "Disconnected"} height="21" width="21"></img>
//                     </div>

//                     <div class = "tabcontent" id={device.host_name}>
//                     <DeviceDetail 
//                     key={device.ip_address}
//                     id={device.id} 
//                     deviceName={device.host_name}
//                     deviceType={device.device_type}
//                     ipAddress={device.ip_address}
//                     macAddress={device.mac_address}
//                     operatingSystem={device.operating_system}
//                     activeConnection={device.snap_shots[device.snap_shots.length - 1].active_connection}
//                     uploadSpeed={device.snap_shots[device.snap_shots.length - 1].upload_speed}
//                     downloadSpeed={device.snap_shots[device.snap_shots.length - 1].download_speed}
//                     snapShots={device.snap_shots}
//                     />
//                     </div>
//                 </div>
//             )
//         })

//         return (
//             <div>
//                 <ul>
//                     {deviceNames}
//                 </ul>

//             </div>
//         );
//     }

// }

// export default DeviceList;
