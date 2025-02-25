import { Footer as FlowFooter } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function Footer() {
  return (
    <FlowFooter>
      <div className="w-full bg-green-500 shadow-inner">
        <div className="grid w-full grid-cols-2 gap-8 px-14 py-8 md:grid-cols-4">
          <div>
            <FlowFooter.Title className="text-white" title="Company" />
            <FlowFooter.LinkGroup col>
              <FlowFooter.Link href="#" className="text-white">
                About
              </FlowFooter.Link>
              <FlowFooter.Link href="#" className="text-white">
                Product
              </FlowFooter.Link>
              <FlowFooter.Link href="#" className="text-white">
                Blog
              </FlowFooter.Link>
            </FlowFooter.LinkGroup>
          </div>
          <div>
            <FlowFooter.Title className="text-white" title="help center" />
            <FlowFooter.LinkGroup col>
              <FlowFooter.Link href="#" className="text-white">
                Instagram
              </FlowFooter.Link>
              <FlowFooter.Link href="#" className="text-white">
                Twitter
              </FlowFooter.Link>
              <FlowFooter.Link href="#" className="text-white">
                Facebook
              </FlowFooter.Link>
              <FlowFooter.Link href="#" className="text-white">
                Contact Us
              </FlowFooter.Link>
            </FlowFooter.LinkGroup>
          </div>
          <div>
            <FlowFooter.Title className="text-white" title="legal" />
            <FlowFooter.LinkGroup col>
              <FlowFooter.Link href="#" className="text-white">
                Privacy Policy
              </FlowFooter.Link>
              <FlowFooter.Link href="#" className="text-white">
                Licensing
              </FlowFooter.Link>
              <FlowFooter.Link href="#" className="text-white">
                Terms &amp; Conditions
              </FlowFooter.Link>
            </FlowFooter.LinkGroup>
          </div>
          <div>
            <FlowFooter.Title className="text-white" title="download" />
            <FlowFooter.LinkGroup col>
              <FlowFooter.Link href="#" className="text-white">
                iOS
              </FlowFooter.Link>
              <FlowFooter.Link href="#" className="text-white">
                Android
              </FlowFooter.Link>
              <FlowFooter.Link href="#" className="text-white">
                Windows
              </FlowFooter.Link>
              <FlowFooter.Link href="#" className="text-white">
                MacOS
              </FlowFooter.Link>
            </FlowFooter.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-green-700 px-12 py-6 text-center sm:flex sm:items-center sm:justify-between">
          <FlowFooter.Copyright
            href="#"
            className="text-white"
            by="Nizar"
            year={2024}
          />
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0 sm:justify-center">
            <FlowFooter.Icon
              href="#"
              className="text-white"
              icon={BsFacebook}
            />
            <FlowFooter.Icon
              href="#"
              className="text-white"
              icon={BsInstagram}
            />
            <FlowFooter.Icon href="#" className="text-white" icon={BsTwitter} />
            <FlowFooter.Icon href="#" className="text-white" icon={BsGithub} />
            <FlowFooter.Icon
              href="#"
              className="text-white"
              icon={BsDribbble}
            />
          </div>
        </div>
      </div>
    </FlowFooter>
  );
}
