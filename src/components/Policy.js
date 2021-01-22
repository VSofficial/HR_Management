import React from "react";
import { Typography, } from "antd";
const { Title, Text, Paragraph } = Typography;

class Policy extends React.Component {
    render() {
        return (
            <div className="site-layout-background"
                style={{
                    // margin: '24px 16px',
                    margin: '20px 40px',
                    padding: 24,
                    minHeight: 280,
                    borderRadius: '8px'
                }}>
                <Title underline level={4}>POLICIES</Title>
                <Paragraph>
                    Company policies and procedures establish the rules of conduct within an organization, outlining the responsibilities of both employees and employers. Depending on the needs of the organization, various policies and procedures establish rules regarding employee conduct, attendance, dress code, privacy and other areas related to the terms and conditions of employment.
                </Paragraph>
                <Title level={4} >1.  Access to Information:</Title>
                <Paragraph>
                    Information is available on need to know basis for specific groups. Access to this information is
                    Authorized through privileges approved by unit mentors or project mentors. Unauthorized access or
                    attempt at unauthorized access is strictly prohibited and any attempts to do so will result in immediate
                    termination of employment and legal action as deemed fit by the Company.
                </Paragraph>
                <Title level={4} >2. Restriction on Personal Use:</Title>
                <Paragraph>
                    Use of Company resources for personal use is strictly restricted. This includes usage of computer
                    resources, information, internet service, and working time of the Company for any personal use. You
                    will under no circumstances carry any work home unless specifically requested by your manager. Any
                    usage of Company information for personal benefit will result in immediate termination of
                    employment without notice and / or legal action for misdemeanor as deemed fit by the Company. You
                    shall be liable to reimburse the Company for any losses incurred due to misuse of Company data.
                </Paragraph>
                <Title level={4} >3. Security:</Title>
                <Paragraph>
                    Security is an important aspect of our communication and office infrastructure. Security of the Company
                    resources is maintained by controlling physical access to computer system, by disabling all the work
                    stations, usb drives and other measures. Please refer the Security policy for more details on IP
                    protection.
                </Paragraph>
                <Title level={4} >4. Termination of Service:</Title>
                <Paragraph>
                    <ul>
                        <li>
                            <Paragraph>
                                Employment with the Company will stand terminated at the end of the month in which you attain
                                the age of superannuation (58 Years). Termination of employment may also be initiated earlier by
                                either party by serving prior written notice to the other, as per the notice period stipulated in this
                                offer.
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                In the event of termination of services by either party, the applicable notice period will be 60 days
                                for all the employees.
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Unauthorized absence or absence without permission from duty for a continuous period of <b>7 days </b>
                                would make you lose your lien on employment. In such case your employment shall automatically
                                come to an end without any notice of termination or notice pay.
                            </Paragraph>
                        </li>
                    </ul>
                </Paragraph>
            </div>
        )
    }
}
export default Policy;