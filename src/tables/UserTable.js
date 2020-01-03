import React from 'react'

// const UserTable = () => (
//   <table>
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Username</th>
//         <th>Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>Name data</td>
//         <td>Username data</td>
//         <td>
//           <button className="button muted-button">Edit</button>
//           <button className="button muted-button">Delete</button>
//         </td>
//       </tr>
//     </tbody>
//   </table>
// )

const UserTable = props => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button className="button muted-button">Edit</button>
                <button className="button muted-button">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
  
export default UserTable