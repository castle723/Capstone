import Button from "./Button"
import Input from "./Input"


import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseFirst, chooseLast, chooseEmail, choosePhone, chooseCompany } from "../redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[];
  onClose: () => void;
}

const ContactForm = ( props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseFirst(data.first));
      dispatch(chooseLast(data.last));
      dispatch(chooseEmail(data.email));
      dispatch(choosePhone(data.phone_number));
      dispatch(chooseCompany(data.company))
      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    }
  }

  return (
    <div>
     <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label  htmlFor="name">First Name</label>
          <Input {...register('first')} name='first' placeholder="First" />
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <Input {...register('last')} name='last' placeholder="Last" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input {...register('email')} name='email' placeholder="Email" />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <Input {...register('phone_number')} name='phone_number' placeholder="Phone Number" />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <Input {...register('company')} name='company' placeholder="Company" />
        </div>
        <div className="flex mt-4 ">
          <Button className="px-4 py-2 border border-m-8 rounded-full border-green-500 font-mono text-green-500 text-sm hover:text-white hover:border-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm