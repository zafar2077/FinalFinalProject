import React from "react";
import "./profile.css";
export default function Profile() {
  return (
    <div className="profileContainer">
      <img src=".././profilePic.jpg" className="profilePic" />
      <table>
        <tr>
          <td>
            <p className="profileTextRow">Name</p>
          </td>
          <td>
            <p className="profileText">Abdullah Bin Zafar</p>
          </td>
        </tr>
        <tr>
          <td className="profileTextRow">Membership</td>
          <td>
            <p className="profileText">Simple</p>
          </td>
        </tr>
        <tr>
          <td className="profileTextRow">Total Purchases</td>
          <td>
            <p className="profileText">0.00</p>
          </td>
        </tr>
      </table>
    </div>
  );
}
