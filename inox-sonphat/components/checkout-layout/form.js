import React from 'preact/compat'
export default function Form({messages, loading}) {
    return (
        <legend className={loading ? 'disabled' : ''}>
            <div className="form-field">
                <label>{messages['my_information_label']}</label>

                <div className="field grid grid-2 mtop20">
                    <div className="jfield">
                        <input type="text" className="cqj-field fullwidth"  id="txtLastName" name="txtLastName" placeholder={messages['last_name_label']} value="" />
                    </div>
                    <div className="jfield">
                        <input type="text" className="cqj-field fullwidth" id="txtFirstName" name="txtFirstName" placeholder={messages['first_name_label']} value="" />
                    </div>
                </div>

                <div className="field grid grid-2 mtop20">
                    <div className="jfield">
                        <input type="email" 
                                className="cqj-field fullwidth"
                                id="txtEmail"
                                name="txtEmail" 
                                placeholder="Email" 
                                value="" />
                    </div>
                    <div className="jfield">
                        <input type="tel" className="cqj-field fullwidth" id="txtPhone" name="txtPhone" placeholder={messages['phone_label']} value="" />
                    </div>
                </div>
                <div className="field mtop20">
                    <input type="text" className="cqj-field fullwidth" id="txtAddress" name="txtAddress" placeholder={messages['address_label']} value="" />
                </div>
            </div>
        </legend>
    )
}
