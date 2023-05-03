import Button from "../../../Button/Button";

const ContactsTable = ({ data, onClick }) => {
    return (
        <table className="table mx-3 px-4">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Tel</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name ? item.name.split(' ')[0] : item.firstName}</td>
                        <td>{item.name ? item.name.split(' ')[0] : item.lastName}</td>
                        <td>{item.phone}</td>
                        <td>
                             <Button onClick={() => onClick(item.id)} title={'DELETE'} type={'button'} className={'btn btn-danger'}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ContactsTable;