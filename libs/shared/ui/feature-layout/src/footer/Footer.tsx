"use client";

import {
  BaseComponentProps,
  Divider,
  DividerSizes,
  DividerVariants,
  Heading,
  LinkVariants,
} from "@open-system/design-system-components";
import { Link } from "@open-system/shared-ui-components";
import Logo from "../../../../../../assets/box-logo-gradient.svg";
import GithubLogo from "../../assets/github-icon.svg";
import KeybaseLogo from "../../assets/keybase-icon.svg";
import LinkedInLogo from "../../assets/linkedin-icon.svg";
import MediumLogo from "../../assets/medium-icon.svg";
import { FooterForm } from "./footer-form";

export function Footer({ className, ...props }: BaseComponentProps) {
  return (
    <div className="mt-28 h-[50rem] w-full overflow-hidden">
      <div className="absolute bottom-0 z-footer h-96 w-full bg-bg-footer bg-[length:100%_100%] bg-fixed bg-no-repeat bg-origin-border"></div>
      <div className="absolute bottom-0 z-footer w-full px-0 pt-28 lg:px-32">
        <div className="w-full rounded-t-lg bg-white shadow-[20px_10px_5px_0px_rgba(0,0,0,0.3)]">
          <div className="flex h-full w-full flex-col rounded-t-lg bg-gradient-to-br from-footer/100 via-footer/75 to-footer/90 bg-[length:100%_100%] bg-bottom bg-no-repeat">
            <div className="flex w-full flex-1 flex-col gap-6 py-6 px-5 md:px-8 lg:px-10">
              <div className="flex flex-row gap-16">
                <FooterForm className="w-full" />
                <div className="hidden flex-row items-center justify-center xl:flex">
                  <Link className="h-[18rem] w-[26rem]">
                    <Logo className="h-[18rem] w-[26rem]" />
                  </Link>
                </div>
              </div>
              <Divider
                size={DividerSizes.MEDIUM}
                variant={DividerVariants.LIGHT}
              />
              <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:items-start">
                <div className="flex flex-col gap-2">
                  <Heading className="whitespace-nowrap" level={3}>
                    Navigation
                  </Heading>
                  <div className="flex flex-row gap-16">
                    <div className="flex flex-col gap-2">
                      <Link variant={LinkVariants.SECONDARY}>Home</Link>
                      <Link variant={LinkVariants.SECONDARY}>About</Link>
                      <Link variant={LinkVariants.SECONDARY}>Contact</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link variant={LinkVariants.SECONDARY}>Projects</Link>
                      <Link variant={LinkVariants.SECONDARY}>Privacy</Link>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Heading className="whitespace-nowrap" level={3}>
                    Blog
                  </Heading>
                  <Link variant={LinkVariants.SECONDARY}>Articles</Link>
                  <Link variant={LinkVariants.SECONDARY}>Latest</Link>
                </div>
                <div className="flex flex-col gap-2">
                  <Heading className="whitespace-nowrap" level={3}>
                    Docs
                  </Heading>
                  <Link variant={LinkVariants.SECONDARY}>Open System</Link>
                  <Link variant={LinkVariants.SECONDARY}>Design System</Link>
                  <Link variant={LinkVariants.SECONDARY}>Storybook</Link>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center sm:flex-row">
                  <div className="flex w-fit flex-col gap-0.5">
                    <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
                      <Link
                        className="h-[5rem] w-[5rem] transition-transform hover:translate-y-0.5 hover:scale-105"
                        inNewTab={true}
                        href="https://github.com/sullivanpj">
                        <GithubLogo className="h-[5rem] w-[5rem]" />
                      </Link>
                      <Link
                        className="h-[5rem] w-[5rem] transition-transform hover:translate-y-0.5 hover:scale-105"
                        inNewTab={true}
                        href="https://keybase.io/sullivanp">
                        <KeybaseLogo className="h-[5rem] w-[5rem]" />
                      </Link>
                      <Link
                        className="h-[5rem] w-[5rem] transition-transform hover:translate-y-0.5 hover:scale-105"
                        inNewTab={true}
                        href="https://www.linkedin.com/in/patrick-sullivan-865526b0">
                        <LinkedInLogo className="h-[5rem] w-[5rem]" />
                      </Link>
                      <Link
                        className="h-[5rem] w-[5rem] transition-transform hover:translate-y-0.5 hover:scale-105"
                        inNewTab={true}>
                        <MediumLogo className="h-[5rem] w-[5rem]" />
                      </Link>
                    </div>
                    <div className="flex flex-col text-center">
                      <label className="font-footer-name text-lg text-primary">
                        Patrick J. Sullivan
                      </label>
                      <label className="text-md font-footer-name text-primary">
                        New York Metropolitan Area
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-row items-center justify-center xl:hidden">
              <Link className="h-[18rem] w-[26rem]">
                <Logo className="h-[18rem] w-[26rem]" />
              </Link>
            </div>
            <div className="flex w-full flex-row justify-center pt-2 pb-3">
              <p className="font-footer-copyright text-sm text-gray-400">
                Copyright © 2023. Pat Sullivan Development. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
