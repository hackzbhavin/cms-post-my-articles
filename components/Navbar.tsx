import Link from "next/link";
import { BUTTON, LABEL, NAVIGATE } from "../constants";
import { Button } from "./Button";
import { useRouter } from "next/router";
import { ButtonVariants } from "../enums";

export default function Navbar() {
  const router = useRouter();
  const goToCreatePost = () => {
    router.push(NAVIGATE.TO_CREATE_POST);
  };
  return (
    <nav className="navbar">
      <Link href={NAVIGATE.TO_HOME} className="navbar-logo">
        {LABEL.BRAND_NAME}
      </Link>
      <div className="nav-menus">
        <Button
          onPress={goToCreatePost}
          textLabel={BUTTON.NEW_POST}
          variant={ButtonVariants.PRIMARY}
        />
      </div>
    </nav>
  );
}
