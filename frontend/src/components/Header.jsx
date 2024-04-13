import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

import { Link as RouterLink } from "react-router-dom";

const Header = ({ sidebar, setSidebar }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = React.useState("login");
  return (
    <div className="fixed top-0 h-[72px] bg-white z-50 w-full px-5 sm:px-12 md:px-16 lg:px-20 flex items-center justify-between text-base">
      <RouterLink to="/">
        {" "}
        <div className="flex justify-center space-x-2 items-center">
          <img src="/logo.png" className="h-10 rounded-full" />
          <h1 className="font-volkhov whitespace-nowrap text-xl font-bold text-[#254D4D]">
            Urban Dwellings
          </h1>
        </div>
      </RouterLink>

      <div className="md:flex items-center justify-center hidden xl:space-x-12 lg:space-x-8 md:space-x-5 ml-2 font-roboto uppercase text-base text-[#254D4D]">
        <RouterLink to="/">
          <h1 className="hover:text-[#C14E07]">home</h1>
        </RouterLink>
        <RouterLink to="/shop">
          {" "}
          <h1 className="hover:text-[#C14E07]">shop</h1>
        </RouterLink>
        <RouterLink to="/contact">
          <h1 className="hover:text-[#C14E07]">contact</h1>
        </RouterLink>
      </div>
      <div className=" flex items-center space-x-2 sm:space-x-3 justify-center text-[#254D4D]">
        <button><FiShoppingCart/></button>
        <button><FaRegHeart/></button>

        <button
          onClick={onOpen}
          className="rounded-full  uppercase  md:hover:text-[#815b44]"
        >
          <FaUser />
        </button>
      </div>
      <button
        className="md:hidden text-[#254D4D] text-xl"
        onClick={() => setSidebar((el) => !el)}
      >
        {sidebar ? <RxCross2 /> : <RxHamburgerMenu />}
      </button>

      <Modal placement="center" size="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <Card className="max-w-full pb-10">
                <CardBody className="overflow-hidden">
                  <Tabs
                    fullWidth
                    size="md"
                    aria-label="Tabs form"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                  >
                    <Tab key="login" title="Login">
                      <form className="flex flex-col gap-4">
                        <Input
                          isRequired
                          label="Email"
                          placeholder="Enter your email"
                          type="email"
                        />
                        <Input
                          isRequired
                          label="Password"
                          placeholder="Enter your password"
                          type="password"
                        />
                        <p className="text-center text-small">
                          Need to create an account?{" "}
                          <Link
                            className="hover:cursor-pointer"
                            size="sm"
                            onPress={() => setSelected("sign-up")}
                          >
                            Sign up
                          </Link>
                        </p>
                        <div className="flex gap-2 justify-end">
                          <Button fullWidth color="primary">
                            Login
                          </Button>
                        </div>
                      </form>
                    </Tab>
                    <Tab key="sign-up" title="Sign up">
                      <form className="flex flex-col gap-4 h-[300px]">
                        <Input
                          isRequired
                          label="Name"
                          placeholder="Enter your name"
                          type="text"
                        />
                        <Input
                          isRequired
                          label="Email"
                          placeholder="Enter your email"
                          type="email"
                        />
                        <Input
                          isRequired
                          label="Password"
                          placeholder="Enter your password"
                          type="password"
                        />
                        <p className="text-center text-small">
                          Already have an account?{" "}
                          <Link className="hover:cursor-pointer" size="sm" onPress={() => setSelected("login")}>
                            Login
                          </Link>
                        </p>
                        <div className="flex gap-2 justify-end">
                          <Button fullWidth color="primary">
                            Sign up
                          </Button>
                        </div>
                      </form>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Header;
