import React ,{useContext} from 'react'
import { packageContext } from '../../context/packageContext'

export default function PackageDetails() {

  let packageData = useContext(packageContext);

  return (
    <div>declerationNumber: {packageData.declerationNumber} | status: {packageData.status}</div>
  )
}
