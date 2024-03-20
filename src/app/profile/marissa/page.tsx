import React from 'react'
import './profile.scss'
import { FiStar } from 'react-icons/fi'
import { GoStarFill } from 'react-icons/go'
import { FaTwitter } from 'react-icons/fa'
import { MdAssignment } from 'react-icons/md'
import { TbPointerHeart } from 'react-icons/tb'
import { AiOutlinePartition } from 'react-icons/ai'
import Rules from './rules/Rules'
import ServiceAssign from './serviceAssign/ServiceAssign'
type Props = {}

export default function page({}: Props) {
	return (
		<main id='page_profile-main'>

				<section className="hero-section">
					<article className='text-part'>
							<img src="/decors/star-decor.png" alt="" className='star-decor'/>
							<div className="hero-title">
								<div className="sub-text">
									<p>INVESTIGATOR </p><p className='rune-text'> &nbsp;ALTERNATE</p>
								</div>
								<div className="name-container">
									<h2 className='investigator-name'>MARISSA</h2>
								</div>
							</div>
							<p className='bio'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Labore et dolore magna aliqua. 
							</p>
							<div className="mini-info-list">
								<div className="info">
									<h2>YEARS OF SERVICE</h2>
									<p>2 YEARS</p>
								</div>
								<div className="info">
									<h2>???</h2>
									<p> ? ? ?</p>
								</div>
								<div className="info">
									<h2>??? </h2>
									<p className='rune-text'> BCMEJR$RRS</p>
								</div>
								{/* <div className="info">
									<h2>CODENAME</h2>
									<p>MAW1S2H</p>
								</div>
								<div className="info">
									<h2>ACTIVE</h2>
									<p>???</p>
								</div> */}
								{/* <div className="info">
									<h2>ACCESS LEVEL</h2>
									<div className="star-list">
										<GoStarFill/>	<GoStarFill/>	<GoStarFill/>	<GoStarFill className='dim'/>	<GoStarFill className='dim'/>
									</div>
								</div> */}
							</div>
					</article>
					<figure className='img-part'>
						<img src="/graphics/hero-art.png" alt="" className='hero-art' />
					</figure>
				</section>

				<section className='investigator-profile'>

							<div className="sub-title">
								<div className="confine">
									<p className='rune-text'>HIEROPHANT</p>
								</div>
							</div>

							<div className="profile-title confine">
								<div className="title">
									<h2>INVESTIGATOR PROFILE</h2>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
							</div>

							<div className="profile-info-list">
								<div className="confine">
									<div className="info-list">
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
										<div className="info">
											<h2>NAME</h2>
											<p>FULL NAME</p>
										</div>
									</div>

									<figure className='pfp'>
										<div className="logo">
											<img src="/graphics/profile-placeholder.jpg" alt=""  className='pfp'/>
										</div>
									</figure>
								</div>
							</div>

							<div className="additional-info">
								<div className="confine">
									<div className="left">
										<div className="title">
											<h2>ADDITIONAL INFORMATION</h2>
											<div className="box-decor">
												<div className="box"></div>
												<div className="box"></div>
												<div className="box"></div>
											</div>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.</p>
									</div>
									<div className="right">
										<div className="detail">
											<h2>DETAIL</h2>
											<p>Other Detail</p>
										</div>
										<div className="contact-list">
											<a href="#" target='_blank' className='contact'>
												<FaTwitter/>
											</a>
											<a href="#" target='_blank' className='contact'>
												<FaTwitter/>
											</a>
											<a href="#" target='_blank' className='contact'>
												<FaTwitter/>
											</a>
											<a href="#" target='_blank' className='contact'>
												<MdAssignment/>
											</a>
											<a href="#" target='_blank' className='contact'>
												<TbPointerHeart/>
											</a>
											<a href="#" target='_blank' className='contact'>
												<AiOutlinePartition/>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="activity-log">
								<div className="confine">
									<div className="log-title">
											<h2>ACTIVITY <br/> LOG</h2>
											<p>MILESTONES</p>
									</div>
									<div className="log-list">
											<div className="log">
												<h2>ACHIEVEMENTS</h2>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene</p>
											</div>
											<div className="log">
												<h2>ACHIEVEMENTS</h2>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene</p>
											</div>
							
											<div className="log">
												<h2>ACHIEVEMENTS</h2>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene</p>
											</div>
											<div className="log">
												<h2>ACHIEVEMENTS</h2>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene</p>
											</div>
											<div className="log">
												<h2>ACHIEVEMENTS</h2>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene</p>
											</div>
											<div className="log">
												<h2>ACHIEVEMENTS</h2>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene</p>
											</div>
									</div>
								</div>
							</div>
				</section>


				<section className='skills'>
					<div className="skills-title">
							<div className="decor-wand">
								<div className="diamond"></div>
								<div className="line"></div>
							</div>
							<div className="decor-box">
								<div className="box slanted rotate"></div>
								<div className="box"></div>
								<div className="box"></div>
								<div className="box"></div>
							</div>
							<div className="title-text">
								<h2>SPECIALIZED SKILLS</h2>
							</div>
							<div className="decor-box">
								<div className="box"></div>
								<div className="box"></div>
								<div className="box"></div>
								<div className="box slanted"></div>
							</div>
							<div className="decor-wand">
								<div className="line"></div>
								<div className="diamond"></div>
							</div>
					</div>

					<div className="service-list">
							<div className="service-card">
									<div className="service-title">
										<div className="top-part">
											<hr /><hr className='longer' />
										</div>
										<div className="title-part">
											<h2>SERVICE TITLE</h2>
										</div>
									</div>
									<div className="description">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.Lorem ipsum dolor sit amet, consecte.</p>
									</div>
									<div className="notes">
										<div className="note">
											<h2>NOTES</h2>
											<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
										</div>
										<div className="note">
											<h2>NOTES</h2>
											<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
										</div>
										<div className="note">
											<h2>NOTES</h2>
											<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
										</div>
									</div>
							</div>
							<div className="service-card">
									<div className="service-title">
										<div className="top-part">
											<hr /><hr className='longer' />
										</div>
										<div className="title-part">
											<h2>SERVICE TITLE</h2>
										</div>
									</div>
									<div className="description">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.Lorem ipsum dolor sit amet, consecte.</p>
									</div>
									<div className="notes">
										<div className="note">
											<h2>NOTES</h2>
											<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
										</div>
										<div className="note">
											<h2>NOTES</h2>
											<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
										</div>
										<div className="note">
											<h2>NOTES</h2>
											<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
										</div>
									</div>
							</div>
							<div className="service-card">
									<div className="service-title">
										<div className="top-part">
											<hr /><hr className='longer' />
										</div>
										<div className="title-part">
											<h2>SERVICE TITLE</h2>
										</div>
									</div>
									<div className="description">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene.Lorem ipsum dolor sit amet, consecte.</p>
									</div>
									<div className="notes">
										<div className="note">
											<h2>NOTES</h2>
											<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
										</div>
										<div className="note">
											<h2>NOTES</h2>
											<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
										</div>
										<div className="note">
											<h2>NOTES</h2>
											<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
										</div>
									</div>
							</div>
					
					
					</div>

					<div className="decor-sides">
						<img src="/decors/decor-side.png" alt="" className='side l' />
						<img src="/decors/decor-side.png" alt="" className='side r' />
					</div>
				</section>
				
				<Rules/>
				<ServiceAssign/>
		</main>
	)
}