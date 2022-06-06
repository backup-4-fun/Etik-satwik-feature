import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import image from "./image.png";
function Profile () {
	
	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} >
						<h1 id="center"> User Details</h1>
						<h3> Name : Manideep</h3>
						<h3>  Email Id : bsmanideep@gmail.com</h3>
						<h3> Phone Number : 9494230102</h3>						
					</form>
				</div>
				<div className={styles.right}>
					<h1>Etik Family Member</h1>
					<div>
                        
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Profile;