import Button from "../../../Button/Button";
import InputElement from "./component/InputElement";

const ContactForm = ({onChange, onSubmit, value}) => {
    return ( 
        <>
            <form onSubmit={onSubmit}>
                <InputElement 
                    onChange={onChange} 
                    defaultValue={value.firstName} 
                    data={"firstName"}
                />
                <InputElement 
                    onChange={onChange} 
                    defaultValue={value.lastName} 
                    data={"lastName"}
                />
                <InputElement 
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