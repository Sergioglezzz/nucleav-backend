export class UserResponseDto {
  id: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  role: string;
  profession?: string | null;
  phone: string;
  profile_image_url: string | null;
  bio: string | null;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
