import * as React from 'react';
import { PayStackProps, ISplitPayment, IMultiSplitPayment } from './types';
declare type Props = PayStackProps & ISplitPayment & IMultiSplitPayment;
declare const _default: React.ForwardRefExoticComponent<Pick<Props, "paystackKey" | "billingEmail" | "phone" | "lastName" | "firstName" | "amount" | "currency" | "channels" | "refNumber" | "billingName" | "handleWebViewMessage" | "onCancel" | "autoStart" | "onSuccess" | "activityIndicatorColor" | "splitCode" | keyof ISplitPayment> & React.RefAttributes<React.ReactNode>>;
export default _default;
