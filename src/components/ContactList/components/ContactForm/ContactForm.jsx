import Button from "../../../Button/Button";
import InputElement from "./component/InputElement";

const ContactForm = ({onChange, onSubmit, value}) => {
    return ( 
        <>
            <form onSubmit={onSubmit}>
                <InputElement
                    label={'First name'} 
                    onChange={onChange} 
                    defaultValue={value.firstName} 
                    data={"firstName"}
                />
                <InputElement 
                    label={'Last name'} 
                    onChange={onChange} 
                    defaultValue={value.lastName} 
                    data={"lastName"}
                />
                <InputElement 
                    label={'Phone'} 
                    onChange={onChange} 
                    defaultValue={value.phone} 
                    data={"phone"}
                />
                <Button type={"submit"} className={"btn btn-primary"} title={'PUSH'}/>
            </form>
        </>
    );
}
 
export default ContactForm;