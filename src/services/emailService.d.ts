import { FormType } from '../components/Contact';
export declare function sendEmail(formData: FormType): Promise<{
    message: string;
}>;
