import React, { useState } from 'react';
import { HeaderModal } from './HeaderModal';
import { SearchBar } from './SearchBar';
import {
  Wrapper,
  Container,
  Navigation,
  Link,
  Icon,
  Controls,
  Side,
} from './Header.styles';
import type { IHeaderProps } from '../types/components';
import { useThemeContext } from '../helpers/theme';
import { headerThemedIcons, logoThemedIcons } from '../helpers/assets';
import { toggleLockBodyScroll } from '../helpers/modals';

const renderLinkOptions = (
  href: string,
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
) => {
  if (onClick) {
    return {
      href,
      onClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        onClick(e);
      },
    };
  }

  return {
    href: `https://the-guild.dev${href}`,
    target: '_blank',
    rel: 'noopener noreferrer',
  };
};

export const Header: React.FC<IHeaderProps> = ({
  accentColor,
  activeLink,
  themeSwitch,
  ...restProps
}) => {
  const { isDarkTheme, setDarkTheme } = useThemeContext();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const icons = headerThemedIcons(isDarkTheme || false);
  const logos = logoThemedIcons(isDarkTheme || false);

  const handleModal = (state: boolean) => {
    !mobileNavOpen && toggleLockBodyScroll(state);
    setModalOpen(state);
  };

  const handleNav = (state: boolean) => {
    toggleLockBodyScroll(state);
    setMobileNavOpen(state);
  };

  const links = [
    {
      label: 'Our Services',
      title: 'View our services',
      href: '/services',
    },
    {
      label: 'Platform',
      title: 'View our projects',
      href: '/open-source',
      onClick: () => handleModal(true),
    },
    {
      label: 'Blog',
      title: 'Read our blog',
      href: '/blog',
    },
    {
      label: 'About Us',
      title: 'Learn more about us',
      href: '/about-us',
    },
  ];

  const onLinkClick = restProps.linkProps?.onClick;

  return (
    <Wrapper {...restProps.wrapperProps}>
      <Container {...restProps.containerProps}>
        <Side>
          <Icon
            onClick={() => handleNav(true)}
            {...restProps.navOpenButtonProps}
          >
            <img src={icons.menu} className="h-6 w-6" alt="Search icon" />
          </Icon>
        </Side>

        <a
          {...renderLinkOptions('/', onLinkClick)}
          title="View our website"
          {...restProps.logoProps}
        >
          <img
            src={logos.logoFull}
            className="hidden h-[30px] md:block"
            alt="The Guild Logo"
          />
          <img
            src={logos.logoMono}
            className="h-[38px] md:hidden"
            alt="The Guild Monogram"
          />
        </a>

        <Navigation isModalOpen={mobileNavOpen} {...restProps.navigationProps}>
          <Icon
            iconType="close"
            onClick={() => handleNav(false)}
            {...restProps.navCloseButtonProps}
          >
            <img
              src={icons.close}
              height="22"
              width="22"
              alt="Menu close icon"
            />
          </Icon>
          {links.map((link) => (
            <Link
              key={link.label}
              title={link.title}
              accentColor={accentColor}
              isActiveLink={activeLink?.includes(link.href)}
              {...restProps.linkProps}
              {...renderLinkOptions(link.href, link.onClick || onLinkClick)}
            >
              {link.label}
              {link.onClick && <img src={icons.caret} alt="Link icon" />}
            </Link>
          ))}
          <Controls>
            <SearchBar
              accentColor={accentColor}
              title="Search docs"
              placeholder="Search..."
              {...restProps.searchBarProps}
            />
            {themeSwitch && setDarkTheme && (
              <Icon
                iconType="theme"
                onClick={() => setDarkTheme((state: boolean) => !state)}
                {...restProps.themeButtonProps}
              >
                <img
                  src={icons.themeToggle}
                  height={16}
                  width={16}
                  alt="Theme toggle icon"
                />
              </Icon>
            )}
          </Controls>
        </Navigation>

        <Side>
          <SearchBar
            accentColor={accentColor}
            title="Search docs"
            placeholder="Search..."
            {...restProps.searchBarProps}
          />
        </Side>
      </Container>
      <HeaderModal
        title="Products by The Guild"
        modalOpen={modalOpen}
        onCancelModal={() => handleModal(false)}
        {...restProps.headerModalProps}
      />
    </Wrapper>
  );
};
