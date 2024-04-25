import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import IconDanger from '@theme/Admonition/Icon/Danger';
import IconWarning from '@theme/Admonition/Icon/Warning';
import IconInfo from '@theme/Admonition/Icon/Info';
import IconTip from '@theme/Admonition/Icon/Tip';
import IconNote from '@theme/Admonition/Icon/Note';
import styles from './styles.module.css';


function createOneLineAdmonition(adtype, altype, icon) {
    return function OneLineAdmonition(props) {
        return (
            <div className={`theme-admonition theme-admonition-${adtype} admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module alert alert--${altype} ${styles.smallerAlert}`}>
                <div style={{ display: 'flex' }}>
                    <span className={styles.admonitionIcon}>{icon}</span>
                    {props.children}
                </div>
            </div>
        );
    };
}

const DangerOneLineAdmonition = createOneLineAdmonition('danger', 'danger', <IconDanger />);
const WarningOneLineAdmonition = createOneLineAdmonition('warning', 'warning', <IconWarning />);
const InfoOneLineAdmonition = createOneLineAdmonition('info', 'info', <IconInfo />);
const TipOneLineAdmonition = createOneLineAdmonition('success', 'success', <IconTip />);
const NoteOneLineAdmonition = createOneLineAdmonition('note', 'secondary', <IconNote />);

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'danger-one-line': DangerOneLineAdmonition,
  'warning-one-line': WarningOneLineAdmonition,
  'info-one-line': InfoOneLineAdmonition,
  'tip-one-line': TipOneLineAdmonition,
  'note-one-line': NoteOneLineAdmonition,
};

export default AdmonitionTypes;