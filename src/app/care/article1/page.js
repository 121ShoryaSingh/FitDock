import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <div className='care-img h-full bg-cover bg-center'>
      <Header/>
    <div className='py-10'>
    <div className='p-10 backdrop-blur'>
      <Image className='mb-5' src='/art-1.jpg' alt='' width={720} height={720}></Image>
      <p className='text-white mb-10'>
      If the thought of a HIIT workout class full of sprints, shuffles, and jump squats makes you shudder (and your knees ache preemptively), skip it.<br/>
      Personal trainers say, undoubtedly yes, you can get very fit by keeping both feet on the ground with low-impact exercise. And no, low-impact does not mean low-intensity or easy.<br/>
      After trying grueling exercise routine after grueling exercise routine, actor Jennifer Aniston, turned to lower impact strength workouts in her fifties that she says keep her fit as ever.<br/>
      “I have incredible results, if not better than anything I’ve ever done before without the aches and injuries,” she told Well+Good previously. (Aniston was specifically talking about workouts by the fitness brand Pvolve — she is a brand ambassador for the company — which are low-impact classes that focus on resistance exercises to improve strength, stability, and balance.)<br/></p>
      <h2 className='font-bold text-white text-2xl mb-2'>What Is Low Impact Exercise?</h2>
      <p className='mb-5 text-white'>Low-impact exercise refers to any activity that doesn’t place a lot of strain or weight through the joints, says Joann Walker, DPT, a physical therapist and board-certified specialist in sports and orthopedics with the Ohio State University Wexner Medical Center in Columbus.<br/>
      To be considered a low-impact exercise, the activity must not place increased stress on the joints, according to the Hospital for Special Surgery.<br/>
      In contrast, high-impact exercises like running and jump training (plyometrics) put a lot of stress on the joints. “You’re traveling upward away from the ground and then you have gravity, as well as your body weight, as forces impacting your body when you land,” says Heather Milton, MS, CSCS, a board-certified clinical exercise physiologist with NYU Langone Health’s Sports Performance Center in New York City.
      </p>
      <h2 className='font-bold text-white text-xl mb-2'>Low-Impact Cardio Exercises</h2>
        <div className='text-white'>
        <li>Walking</li>
        <li>Cycling</li>
        <li>Elliptical training</li>
        <li>Swimming</li>
        <li>Water aerobics</li>
        </div>

      <h2 className='font-bold text-white py-3 text-xl mb-2'>Low-Impact Strength Training Exercises</h2>
      <div className='text-white'>
      <li>Weight lifting</li>
      <li>Tai chi</li>
      <li>Suspension training</li>
      <li>Yoga</li>
      </div>
    </div>
    <Footer/>
    </div>
    </div>
  )
}

export default page