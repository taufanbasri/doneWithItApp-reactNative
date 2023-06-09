import { StyleSheet } from 'react-native'
import TextInput from '../TextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField

const styles = StyleSheet.create({})