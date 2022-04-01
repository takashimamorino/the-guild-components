import { FC, useEffect } from 'react';
import FocusTrap from 'focus-trap-react';
import {
  Body,
  Container,
  Header,
  HeaderImage,
  HeaderInfo,
  Overlay,
  Wrapper,
} from './Modal.styles';
import { IModalProps } from '../types/components';
import { modalThemedIcons } from '../helpers/assets';
import { useThemeContext } from '../helpers/theme';
import { useKeyPress } from '../helpers/hooks';
import { CloseIcon } from './Icon';

export const Modal: FC<IModalProps> = ({
  image,
  title,
  description,
  children,
  visible,
  placement,
  onCancel,
  ...restProps
}) => {
  const { isDarkTheme } = useThemeContext();
  const escapePress = useKeyPress('Escape');
  const icons = modalThemedIcons(isDarkTheme || false);

  const renderDescription = () => {
    if (!description) {
      return;
    }

    if (typeof description === 'object') {
      return (
        <a {...description} {...restProps.headerLinkProps}>
          <p>{description.children}</p>
          <img src={icons.externalLink} height="15" width="15" alt="External" />
        </a>
      );
    }
    return <p {...restProps.headerDescriptionProps}>{description}</p>;
  };

  useEffect(() => {
    if (visible && escapePress) {
      onCancel();
    }
  }, [visible, escapePress]);

  return (
    <Container isModalOpen={visible} {...restProps.containerProps}>
      <Overlay
        isModalOpen={visible}
        onClick={() => onCancel()}
        tabIndex={-1}
        {...restProps.overlayProps}
      />
      <FocusTrap
        active={visible}
        focusTrapOptions={{
          fallbackFocus: '#tgc-modal',
          clickOutsideDeactivates: true,
        }}
      >
        <Wrapper
          id="tgc-modal"
          tabIndex={-1}
          isModalOpen={visible}
          placement={placement}
          {...restProps.wrapperProps}
        >
          <Header>
            {image && (
              <HeaderImage {...image} {...restProps.headerImageProps} />
            )}
            <HeaderInfo>
              <h2 {...restProps.headerTitleProps}>{title}</h2>
              {renderDescription()}
            </HeaderInfo>
            <button
              onClick={() => onCancel()}
              className="
                absolute
                top-6
                right-6
                flex
                cursor-pointer
                items-center
                justify-center
                rounded-lg
                border-2
                border-transparent
                bg-gray-200
                p-1.5
                text-gray-500
                !outline-none
                transition
                hocus:border-gray-500
                dark:bg-gray-700
                dark:text-gray-200
              "
            >
              <CloseIcon />
            </button>
          </Header>
          <Body {...restProps.bodyProps}>{children}</Body>
        </Wrapper>
      </FocusTrap>
    </Container>
  );
};
