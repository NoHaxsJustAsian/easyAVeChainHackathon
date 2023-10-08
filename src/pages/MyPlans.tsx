import { Container } from 'react-bootstrap';
import EventCard from './Feed/EventCard';
import EventCardsList from './Feed/EventCardsList';
import {RiSearchLine} from 'react-icons/ri';
import Navbar from './Navbar';
import {useParams} from 'react-router-dom';
 
const plans:any = ['hai', 'hai']

function CreateEvent() {
  return (
    <div className="mt-5 mb-5 sm:flex sm:items-center sm:justify-center sm:gap-4">
    <p className="mt-3 text-sm text-gray">
          Let's make a plan! 🎉
        </p>

    <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

    <button
          className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          type="button"
        >
          Create Event
        </button>
  </div>
  )
}

function HeaderTemplate() {
    return (
      <>
        <header aria-label="Page Header" className="d-flex">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
  <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Bookmarked Plans
      </h1>
    </div>
</header>
</>
    )
}

function BookMarkedPlans() {

  return (
    <div>

    </div>
  )
}

function ButtonPagination() {
  return (
    <ol className="mt-5 flex justify-center gap-1 text-xs font-medium">
  <li>
    <a
      href="#"
      className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
    >
      <span className="sr-only">Prev Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
    >
      1
    </a>
  </li>

  <li
    className="block h-8 w-8 rounded border-blue-600 bg-indigo-500 text-center leading-8 text-white"
  >
    2
  </li>

  <li>
    <a
      href="#"
      className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
    >
      3
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
    >
      4
    </a>
  </li>

  <li>
    <a
      href="#"
      className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
    >
      <span className="sr-only">Next Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </li>
</ol>

  )
}

function Search() {
  return (<label
    htmlFor="filter"
    className="mb-3 relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
  >
    <input
      type="text"
      id="filter"
      placeholder="filter"
      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
    />
  
    <span
      className="d-flex absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
    >
      Plan Finder
      <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 m-auto hidden sm:block sm:h-px sm:w-8 "></span>
      <RiSearchLine size={18}/>
    </span>
  </label>)
}

function MyPlans() {
  const params  = useParams();
  const id = params.id;

    return (
      <>
      <Navbar id={id}/>
        <Container>
            <HeaderTemplate/>
            <CreateEvent/>
            <Search/>
            <Container>
                <EventCardsList/>
            </Container>
        </Container>
        </>
    )
}

export default MyPlans;