import type React from "react";
export declare type Currency = 'NGN' | 'GHS' | 'USD' | 'ZAR';
export declare type PaymentChannels = 'bank' | 'card' | 'qr' | 'ussd' | 'mobile_money';
interface Response {
    status: string;
}
interface SuccessResponse extends Response {
    transactionRef?: string;
    data?: any;
}
export interface PayStackProps {
    paystackKey: string;
    billingEmail: string;
    firstName?: string;
    lastName?: string;
    phone?: string | number;
    amount: string | number;
    currency?: Currency;
    channels?: PaymentChannels[];
    refNumber?: string;
    billingName?: string;
    handleWebViewMessage?: (string: string) => void;
    onCancel: (Response: Response) => void;
    onSuccess: (SuccessResponse: SuccessResponse) => void;
    autoStart?: boolean;
    activityIndicatorColor?: string;
    ref: React.ReactElement;
}
export interface ISplitPayment {
    subAccount: string;
    transactionCharge?: string | number;
    bearer?: string;
}
export interface IMultiSplitPayment {
    splitCode: string;
}
export interface ISubscription {
    plan: string;
    quantity?: string;
}
export interface PayStackRef {
    startTransaction: () => void;
    endTransaction: () => void;
}
export {};
