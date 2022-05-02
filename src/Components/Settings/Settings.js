import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getUsers, getUser, setUserPerms, addUser, removeUser, setPass } from "../../fetchData/requestDB";

export default function Settings(){
    const [ page, setPage ] = useState('main')
    const [ post, setPost ] = useState(null)
    const [ perms, setPerms ] = useState(null)
    const [ editing, setEditing ] = useState(null)
    const [ adding, setAdding ] = useState(false)

    const [ hasAdmin, setHasAdmin ] = useState(false)
    const [ hasManage, setHasManage ] = useState(false)
    const [ hasDelete, setHasDelete ] = useState(false)
    const [ hasEdit, setHasEdit ] = useState(false)
    const [ name, setName ] = useState(false)
    const [ email, setEmail ] = useState(false)

    useEffect(() => {
        getPost()
        getPerms()
    }, [])

    return(
        <motion.div 
        initial={{x: 100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: 100, opacity: 0}}
        style={{
            position: 'absolute',
            top: 90,
            left: 10,
            right: 10,
            bottom: 10,
            textAlign: 'center',
        }}>
            <span style={{
                fontWeight: 'bold',
                fontSize: 40,
            }}>
                Settings
            </span>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                display: 'flex',
                justifyContent: 'flex-start',
            }}>
            </div>
            <div style={{
                display: 'flex',
                marginTop: 40,
                marginBottom: 40,
                justifyContent: 'space-around',
                fontSize: 20,
                backgroundColor: '#eee',
                padding: 10
            }}>
                <span style={{
                    color: page === 'main' ? 'black' : '#999',
                    cursor: 'pointer',
                }}
                onClick={() => setPage('main')}>
                    General
                </span>

                {perms && (perms.admin || perms.manage) && <span style={{
                    color: page === 'users' ? 'black' : '#999',
                    cursor: 'pointer',
                }}
                onClick={() => setPage('users')}>
                    Users
                </span>}
            </div>

            <div style={{
                    backgroundColor: '#ff4242',
                    width: 80,
                    height: 30,
                    borderRadius: 5,
                    color: 'white',
                    fontWeight: 'bold',
                    paddingTop: 5,
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    cursor: 'pointer',
                }}
                onClick={() => {
                    document.cookie=`_309dc5ebe07576b1cbaf9107ebde8dcfa32fdd858cfe3887a4c8cb37dfbf3242=; max-age=0`
                    window.location.reload()
                }}>
                    Log Out
                </div>

            {page === 'main' && post && <div>
                <div style={{
                    marginTop: 20,
                    border: '1px solid #cccccc',
                    borderRadius: 10,
                }}>
                    <div style={{
                        margin: 20,
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <input style={{
                            width: '20%',
                            height: 40,
                            border: '1px solid #cccccc',
                        }}
                        placeholder='Change password'
                        id='change-password-input'
                        type='password'>
                        </input>
                        <div style={{
                            backgroundColor: '#5aa9ff', 
                            minWidth: 80,
                            color: 'white',
                            fontWeight: 'bold',
                            paddingTop: 10,
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            changePass(document.getElementById('change-password-input').value)
                        }}>
                            Submit
                        </div>
                    </div>
                </div>
            </div>}


            {page === 'users' && post && perms && <div>

                <div style={{
                    margin: '20px auto',
                    width: '100%',
                    height: 50,
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: 40,
                }}>
                    <div style={{
                        backgroundColor: '#478eff',
                        width: 50,
                        height: 50,
                        borderRadius: '100%',
                    }}
                    onClick={() => setAdding(wasAdding => !wasAdding)}>
                        <svg version="1.1" x="0px" y="0px" width="459.325px" height="459.325px" viewBox="0 0 459.325 459.325" style={{
                            width: 30,
                            height: 30,
                            marginTop: 10,
                            filter: 'invert()',
                        }}>
                        <g>
                            <path d="M459.319,229.668c0,22.201-17.992,40.193-40.205,40.193H269.85v149.271c0,22.207-17.998,40.199-40.196,40.193
                                c-11.101,0-21.149-4.492-28.416-11.763c-7.276-7.281-11.774-17.324-11.769-28.419l-0.006-149.288H40.181
                                c-11.094,0-21.134-4.492-28.416-11.774c-7.264-7.264-11.759-17.312-11.759-28.413C0,207.471,17.992,189.475,40.202,189.475h149.267
                                V40.202C189.469,17.998,207.471,0,229.671,0c22.192,0.006,40.178,17.986,40.19,40.187v149.288h149.282
                                C441.339,189.487,459.308,207.471,459.319,229.668z"/>
                        </g>
                        </svg>

                        
                    </div>
                </div>

                {adding &&
                <div style={{
                    width: '50%',
                    margin: 'auto',
                    backgroundColor: '#e0e0e0',
                    padding: '50px',
                    borderRadius: '5px',
                    marginBottom: '10px',
                    position: 'relative',
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: 8,
                        backgroundColor: '#478eff',
                        zIndex: 999,
                        borderRadius: '5px 0 0 5px',
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        <div style={{
                            backgroundColor: '#5aa9ff',
                            color: 'white',
                            padding: 5,
                            borderRadius: 5,
                            cursor: 'pointer',
                            marginRight: 5
                        }}
                        onClick={() => {
                            const hasRole = (
                                document.getElementById('admin-perms-newuser').checked ||
                                document.getElementById('manage-perms-newuser').checked ||
                                document.getElementById('delete-perms-newuser').checked ||
                                document.getElementById('edit-perms-newuser').checked)

                            document.getElementById('name-newuser').value &&
                            document.getElementById('email-newuser').value &&
                            document.getElementById('password-newuser').value &&
                            hasRole &&
                            saveNewUser(
                                {
                                    canAdmin: document.getElementById('admin-perms-newuser').checked,
                                    canManage: document.getElementById('manage-perms-newuser').checked,
                                    canDelete: document.getElementById('delete-perms-newuser').checked,
                                    canEdit: document.getElementById('edit-perms-newuser').checked
                                },
                                document.getElementById('name-newuser').value,
                                document.getElementById('email-newuser').value,
                                document.getElementById('password-newuser').value
                            ) &&
                            setAdding(null)
                        }}>
                            Save
                        </div>
                        <div style={{
                            backgroundColor: '#999',
                            color: 'white',
                            padding: 5,
                            borderRadius: 5,
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            setAdding(false)
                        }}>
                            Cancel
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 20
                    }}>
                        <span>Name</span>
                        <span>Email</span>
                        <span>Password</span>
                        <span>Roles</span>
                    </div>
                    
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <input
                            id={`name-newuser`}
                            placeholder='Enter name of new user'
                            required={true}
                        />
                        <input
                            id={`email-newuser`}
                            placeholder='Enter an email'
                            required={true}
                        />
                        <input
                            id={`password-newuser`}
                            placeholder='Enter a password'
                            required={true}
                            type='password'
                        />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            textAlign: 'start',
                            height: '100%',
                        }}>
                            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Admin</span>
                                <input
                                id={`admin-perms-newuser`}
                                type='checkbox'
                                >
                                </input>
                            </span>
                            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Manage</span>
                                <input
                                id={`manage-perms-newuser`}
                                type='checkbox'
                                >
                                </input>
                            </span>
                            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Delete</span>
                                <input
                                id={`delete-perms-newuser`}
                                type='checkbox'
                                >
                                </input>
                            </span>
                            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Edit</span>
                                <input
                                id={`edit-perms-newuser`}
                                type='checkbox'
                                >
                                </input>
                            </span>
                        </div>

                    </div>
                </div>
                }

                {post && post.map(user => {
                    return(
                        editing === user._id ? 
                        <div key={user._id} style={{
                            width: '50%',
                            margin: 'auto',
                            backgroundColor: '#e9e9e9',
                            padding: '50px',
                            borderRadius: '5px',
                            marginBottom: '10px',
                            position: 'relative',
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                width: 8,
                                backgroundColor: '#478eff',
                                zIndex: 999,
                                borderRadius: '5px 0 0 5px',
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}>
                                <div style={{
                                    backgroundColor: '#5aa9ff',
                                    color: 'white',
                                    padding: 5,
                                    borderRadius: 5,
                                    cursor: 'pointer',
                                    marginRight: 5
                                }}
                                onClick={() => {
                                    saveUserSettings(
                                        user._id, 
                                        {canAdmin: hasAdmin,
                                        canManage: hasManage,
                                        canDelete: hasDelete,
                                        canEdit: hasEdit},
                                        name,
                                        email
                                    )
                                    setEditing(null)
                                }}>
                                    Save
                                </div>
                                <div style={{
                                    backgroundColor: '#999',
                                    color: 'white',
                                    padding: 5,
                                    borderRadius: 5,
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    setEditing(null)
                                }}>
                                    Cancel
                                </div>
                            </div>
                                {perms.admin && 
                                <div style={{
                                    backgroundColor: '#ff4242',
                                    color: 'white',
                                    padding: 5,
                                    borderRadius: 5,
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    top: 10,
                                    left: 20
                                }}
                                onClick={() => {
                                    deleteUser(user._id)
                                    setAdding(false)
                                }}>
                                    Delete
                                </div>}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: 20
                            }}>
                                <span>Name</span>
                                <span>Email</span>
                                <span>Roles</span>
                            </div>
                            
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <input
                                value={name}
                                onChange={e => setName(e.target.value)}/>
                                <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}/>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    textAlign: 'start',
                                    height: '100%',
                                }}>
                                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Admin</span>
                                        <input
                                        id={`admin-perms-${user._id}`}
                                        type='checkbox'
                                        checked={hasAdmin}
                                        onChange={() => setHasAdmin(hadAdmin => !hadAdmin)}
                                        >
                                        </input>
                                    </span>
                                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Manage</span>
                                        <input
                                        id={`manage-perms-${user._id}`}
                                        type='checkbox'
                                        checked={hasManage}
                                        onChange={() => setHasManage(hadManage => !hadManage)}
                                        >
                                        </input>
                                    </span>
                                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Delete</span>
                                        <input
                                        id={`delete-perms-${user._id}`}
                                        type='checkbox'
                                        checked={hasDelete}
                                        onChange={() => setHasDelete(hadDelete => !hadDelete)}
                                        >
                                        </input>
                                    </span>
                                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Edit</span>
                                        <input
                                        id={`edit-perms-${user._id}`}
                                        type='checkbox'
                                        checked={hasEdit}
                                        onChange={() => setHasEdit(hadEdit => !hadEdit)}
                                        >
                                        </input>
                                    </span>
                                </div>

                            </div>
                        </div>
                        :
                        <div key={user._id} style={{
                            width: '50%',
                            margin: 'auto',
                            backgroundColor: '#f8f8f8',
                            padding: '50px',
                            borderRadius: '5px',
                            marginBottom: '10px',
                            position: 'relative',
                        }}>

                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                width: 8,
                                backgroundColor: '#aaa',
                                zIndex: 999,
                                borderRadius: '5px 0 0 5px',
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                color: 'white',
                                padding: 5,
                                borderRadius: 5,
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                setHasAdmin(user.roles.admin)
                                setHasManage(user.roles.manage)
                                setHasDelete(user.roles.delete)
                                setHasEdit(user.roles.edit)
                                setName(user.name)
                                setEmail(user.email)
                                setEditing(user._id)
                                }}>
                                <svg viewBox="0 0 300 300" style={{ width: 20, height: 20 }}>
                                    <g>
                                        <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
                                            l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"/>
                                        <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
                                            L265.13,75.602L231.035,41.507z"/>
                                    </g>
                                </svg>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: 20
                            }}>
                                <span>Name</span>
                                <span>Email</span>
                                <span>Roles</span>
                            </div>
                            
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <span>{user.name}</span>
                                <span>{user.email}</span>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    textAlign: 'start',
                                    height: '100%',
                                }}>
                                <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Admin</span>
                                    <input
                                    id={`admin-perms-${user._id}`}
                                    type='checkbox'
                                    checked={user.roles.admin ? true : false}
                                    disabled={true}
                                    >
                                    </input>
                                </span>
                                <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Manage</span>
                                    <input
                                    id={`manage-perms-${user._id}`}
                                    type='checkbox'
                                    checked={user.roles.manage ? true : false}
                                    disabled={true}
                                    >
                                    </input>
                                </span>
                                <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Delete</span>
                                    <input
                                    id={`delete-perms-${user._id}`}
                                    type='checkbox'
                                    checked={user.roles.delete ? true : false}
                                    disabled={true}
                                    >
                                    </input>
                                </span>
                                <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Edit</span>
                                    <input
                                    id={`edit-perms-${user._id}`}
                                    type='checkbox'
                                    checked={user.roles.edit ? true : false}
                                    disabled={true}
                                    >
                                    </input>
                                </span>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>}

        </motion.div>
    )

    async function getPost(){
        const data = await getUsers()
        setPost(data.data.documents)
    }
    
    async function getPerms(){
        const email = document.cookie.split(';').map(e => {
            if(e.includes('_309dc5ebe07576b1cbaf9107ebde8dcfa32fdd858cfe3887a4c8cb37dfbf3242')){
                return e.split('=')[1]
            }
        })[0]
        const data = await getUser(email)
        setPerms(data.roles)
    }

    async function saveUserSettings(id, perms, name, email){
        let permsData
        permsData = {
            "roles": {
                "admin": perms.canAdmin,
                "manage": perms.canManage,
                "delete": perms.canDelete,
                "edit": perms.canEdit
            },
            "name": name,
            "email": email
        }
        await setUserPerms(id, permsData)

        getPost()
    }

    async function saveNewUser(perms, name, email, pass){
        let permsData
        permsData = {
            "roles": {
                "admin": perms.canAdmin,
                "manage": perms.canManage,
                "delete": perms.canDelete,
                "edit": perms.canEdit
            },
            "name": name,
            "email": email,
            "password": pass
        }
        await addUser(permsData)

        getPost()

    }

    async function deleteUser(id){
        await removeUser(id)
        getPost()
    }

    async function changePass(newPass){
        const email = document.cookie.split(';').map(e => {
            if(e.includes('_309dc5ebe07576b1cbaf9107ebde8dcfa32fdd858cfe3887a4c8cb37dfbf3242')){
                return e.split('=')[1]
            }
        })[0]
        await setPass(email, newPass)
        document.getElementById('change-password-input').value = ''
    }
}