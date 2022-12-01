import { createContext, useState } from "react"

const Notification = ({ alert, type }) => {

    const typeOfAlert = {
        success: 'white',
        default: 'white',
        danger: 'white',
        alert: 'white',
        warning: 'white'
    }

    const alertStyle = {
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        display: 'flex',
        borderRadius: '5px',
        backgroundColor: typeOfAlert[type] || typeOfAlert.default/* typeOfAlert[type] || typeOfAlert.default */,
        top: 100,
        padding: '10px 20px',
        right: 10,
        color: 'black',
        fontSize: '20px',
        fontFamily: 'Georgia, Times New Roman, Times, serif'

    }

    return (
        <div style={alertStyle}>
            {alert}
        </div>
    )

}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [alert, setAlert] = useState('')
    const [type, setType] = useState('')


    const NotificationResult = (typ, alrt) => {
        setAlert(alrt)
        setType(typ)
        setTimeout(() => {
            setAlert('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{ NotificationResult }}>
            {alert != '' && <Notification alert={alert} type={type} />}
            {children}
        </NotificationContext.Provider>
    )

}

export default NotificationContext