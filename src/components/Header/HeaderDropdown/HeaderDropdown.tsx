import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DContent,
  DSubTrigger,
  MenuProvider,
} from "@/components/Header/HeaderDropdown/HeaderDropdown.style";
import DropdownItem from "@/components/Header/HeaderDropdown/DropdownItem";
import {dropdownList} from "@/services/header.data";

function HeaderDropdown() {
  return (
    <MenuProvider>
      <DSubTrigger>
        <HamburgerMenuIcon height={30} width={30}/>
      </DSubTrigger>
      <DContent gutter={32}>
        {dropdownList.map((item, index) => (
          <DropdownItem key={index} name={item.name} href={item.href} />
        ))}
      </DContent>
    </MenuProvider>
  );
}

export default HeaderDropdown;
