import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";


function Footer() {
return (
  <footer>
        <div style={{backgroundColor: '#007db4', color: 'white', padding: '1px 20px', marginTop: '30px', paddingBottom: '30px'}}>
          <div style={{width: '80%', margin: '0 auto'}}>
            <h3>Contact Us</h3>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div>
                <div>
                  <label for="name">Full Name</label><br />
                  <input type="text" name="Name" id="name" style={{border: 'none', borderRadius: '5px', padding: '5px'}} />
                </div>
                <div style={{marginTop: '10px'}}>
                  <label for="name">Your Pets:</label><br />
                  <input type="checkbox" name="Dog" /> Dog
                  <input type="checkbox" name="Cat" /> Cat
                  <input type="checkbox" name="Fish" /> Fish
                </div>
              </div>
              <div>
                <div>
                  <label for="name">Your Gender</label><br />
                  <input type="radio" name="gender" value="male" id="male" /> Male
                  <input type="radio" name="gender" value="female" id="female" /> Female
                </div>
                <div style={{marginTop: '10px'}}>
                  <label for="name">Country:</label><br />
                  <select name="country" style={{borderRadius: '5px', padding: '5px', border: 'none'}}>
                    <option value="US">US</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Ethopia">Ethopia</option>
                    <option value="Ethopia">Bangladesh</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label for="name">Comments</label><br />
                  <textarea name="comments" id="comments" cols="30" rows="5" style={{borderRadius: '5px', border: 'none'}}></textarea>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
              <input type="submit" value="Submit" style={{padding: '20px', border: '5px solid white', borderRadius: '5px', backgroundColor: 'rgb(7, 112, 7)', width: '400px', color: 'white', boxShadow: '5px 5px 5px #ccc'}} />
            </div>
          </div>
        </div>
      </footer>
)
}



export default Footer;