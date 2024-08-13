// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import LetsForm from 'lets-form/react-rsuite5'
import { type ReactElement } from 'react'

interface FormProps {
  form: object
  onSubmit: (arg0: any) => void
  defaultValues: object
}

export default function Form ({ onSubmit, form, defaultValues }: FormProps): ReactElement {
  return (
        <LetsForm hideCancel={true} form={form} onSubmit={onSubmit} defaultValues={defaultValues} />
  )
}
