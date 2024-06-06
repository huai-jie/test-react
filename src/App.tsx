// import { useState } from "react";
// import "./App.css";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

function App() {
  // const [count, setCount] = useState(0);
  console.log(process.env.NODE_ENV);
  return (
    <>
      {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div> */}

      <div className="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
        <div className="fixed inset-y-0 left-0 w-64 max-lg:hidden">
          <nav className="flex h-full flex-col">
            <div className="flex flex-col border-b border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5">
              <span className="relative">
                <Menu>
                  <MenuButton className="flex w-full cursor-default items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 data-[active]:bg-zinc-950/5 data-[hover]:bg-zinc-950/5 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[slot=icon]:*:fill-zinc-500 data-[slot=avatar]:*:[--ring-opacity:10%] data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:py-2 sm:text-sm/5 sm:data-[slot=avatar]:*:size-6 sm:data-[slot=icon]:*:size-5 sm:data-[slot=icon]:last:*:size-4 dark:text-white dark:data-[active]:bg-white/5 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[slot=icon]:*:fill-zinc-400">
                    <span
                      className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                      aria-hidden="true"
                    ></span>
                    <span
                      data-slot="avatar"
                      className="inline-grid shrink-0 rounded-full align-middle outline outline-1 -outline-offset-1 outline-black/[--ring-opacity] [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 *:rounded-full dark:outline-white/[--ring-opacity]"
                    >
                      <img
                        className="size-full"
                        src="./src/assets/react.svg"
                        alt=""
                      />
                    </span>
                    <span className="truncate">React</span>

                    <ChevronDownIcon className="size-4 fill-white/60" />
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-75"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <MenuItems
                      anchor="bottom end"
                      className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                    >
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                          <PencilIcon className="size-4 fill-white/30" />
                          Edit
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                            ⌘E
                          </kbd>
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                          <Square2StackIcon className="size-4 fill-white/30" />
                          Duplicate
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                            ⌘D
                          </kbd>
                        </button>
                      </MenuItem>
                      <div className="my-1 h-px bg-white/5" />
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                          <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
                          Archive
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                            ⌘A
                          </kbd>
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                          <TrashIcon className="size-4 fill-white/30" />
                          Delete
                          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                            ⌘D
                          </kbd>
                        </button>
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </span>
            </div>
            <div
              data-slot="section"
              className="flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8"
            >
              <span className="relative">
                <a
                  className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 data-[active]:bg-zinc-950/5 data-[hover]:bg-zinc-950/5 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[slot=icon]:*:fill-zinc-500 data-[slot=avatar]:*:[--ring-opacity:10%] data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:py-2 sm:text-sm/5 sm:data-[slot=avatar]:*:size-6 sm:data-[slot=icon]:*:size-5 sm:data-[slot=icon]:last:*:size-4 dark:text-white dark:data-[active]:bg-white/5 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[slot=icon]:*:fill-zinc-400"
                  type="button"
                  data-headlessui-state=""
                  href="/"
                >
                  <span
                    className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                    aria-hidden="true"
                  ></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="truncate">Home</span>
                </a>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;
