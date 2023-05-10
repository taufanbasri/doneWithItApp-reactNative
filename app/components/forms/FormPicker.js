import { useFormikContext } from 'formik'
import AppPicker from '../Picker'
import ErrorMessage from './ErrorMessage'

const AppFormPicker = ({ items, name, placeholder, width, PickerItemComponent, numberOfColumns }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  return (
    <>
      <AppPicker
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormPicker