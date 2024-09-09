import { NavBar } from '../components/NavBar'
import { HomePageContent } from '../components/HomePageContent'
import { Carousel } from '../components/Carousel'
import { Fragment } from 'react'
export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <HomePageContent />
    </Fragment>
  );
}
