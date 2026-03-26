// API Client with typed responses for Gym API
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9000';

// Types based on gym-api DTOs
export interface AdminProfile {
  id: number;
  email: string;
  name: string;
  role: string;
}

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  user: AdminProfile;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface Member {
  id: number;
  memberId: string;
  fullName: string;
  phone: string;
  email?: string;
  gender?: string;
  status: string;
  serviceType?: string;
  startDate?: string;
  endDate?: string;
  registrationDate: string;
  emergencyContact?: string;
  notes?: string;
  membershipTier?: string;
  goals?: string | null;
  bloodType?: string | null;
  age?: number | null;
  height?: string | null;
  telegramUsername?: string | null;
  remark?: string | null;
  objective?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface MemberStats {
  totalMembers: number;
  activeMembers: number;
  inactiveMembers: number;
  expiredMembers: number;
  newThisMonth: number;
  frozenMembers: number;
  pendingMembers: number;
}

export interface Attendance {
  id: number;
  localId: number;
  memberId: number;
  date: string;
  member?: Member;
  createdAt: string;
  updatedAt: string;
}

export interface AttendanceStats {
  total: number;
  today: number;
  thisWeek: number;
  thisMonth: number;
  averageDaily: number;
  last7Days: Array<{ date: string; count: number }>;
}

export interface TodayAttendance {
  count: number;
  checkIns: Array<{
    id: number;
    memberId: number;
    memberName: string;
    checkInTime: string;
  }>;
}

export type TransactionType = 'income' | 'expense' | 'positive_return' | 'negative_return';

export interface Transaction {
  id: number;
  memberId: number;
  amount: number;
  type: TransactionType;
  category: string;
  description?: string;
  paymentMethod?: string;
  transactionDate: string;
  member?: Member;
  createdAt: string;
}

export interface TransactionStats {
  totalIncome: number;
  totalOutflows: number;
  netProfit: number;
  thisMonthIncome: number;
  thisMonthOutflows: number;
  lastMonthIncome: number;
  lastMonthOutflows: number;
  last7Days?: { date: string; income: number; outflows: number }[];
}

export interface Service {
  id: number;
  name: string;
  category: string;
  description?: string;
  price: number;
  duration: number;
  durationUnit: 'days' | 'weeks' | 'months' | 'years';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceStats {
  total: number;
  active: number;
  inactive: number;
  categories: number;
  byCategory: { category: string; count: number }[];
}

export interface DashboardOverview {
  totalMembers: number;
  activeMembers: number;
  totalServices: number;
  attendanceToday: number;
  totalRevenue: number;
  revenueThisMonth: number;
  newMembersThisMonth: number;
  averageDailyAttendance: number;
}

export interface RevenueBreakdown {
  thisMonth: number;
  lastMonth: number;
  monthOverMonthGrowth: number;
  thisYear: number;
  byMonth: { month: string; revenue: number }[];
  last7Days: { date: string; revenue: number }[];
  byCategory: { category: string; revenue: number }[];
}

export interface AttendanceTrends {
  today: number;
  thisWeek: number;
  thisMonth: number;
  averageDaily: number;
  last30Days: { date: string; count: number }[];
  byDayOfWeek: { dayOfWeek: string; average: number }[];
}

export interface MemberGrowth {
  total: number;
  newThisMonth: number;
  newLastMonth: number;
  monthOverMonthGrowth: number;
  byMonth: { month: string; newMembers: number; totalAtEndOfMonth: number }[];
}

// Query params types
export interface PaginationQuery {
  page?: number;
  limit?: number;
}

export interface MemberQuery extends PaginationQuery {
  search?: string;
  status?: 'active' | 'inactive' | 'frozen' | 'pending' | 'expired';
  subscriptionStatus?: 'active' | 'pending' | 'inactive';
  serviceType?: string;
}

export interface AttendanceQuery extends PaginationQuery {
  startDate?: string;
  endDate?: string;
  memberId?: number;
}

export interface TransactionQuery extends PaginationQuery {
  startDate?: string;
  endDate?: string;
  transactionType?: TransactionType;
  category?: string;
}

export interface ServiceQuery extends PaginationQuery {
  isActive?: boolean;
  category?: string;
}

// Health Metrics Types
export interface HealthMetric {
  id: number;
  localId: number;
  memberId: number;
  measuredAt: string;
  weight?: number | null;
  bmi?: number | null;
  bodyFatPercent?: number | null;
  heartRate?: number | null;
  muscleMass?: number | null;
  leanBodyMass?: number | null;
  boneMass?: number | null;
  skeletalMuscleMass?: number | null;
  visceralFat?: number | null;
  subcutaneousFatPercent?: number | null;
  proteinPercent?: number | null;
  bmr?: number | null;
  bodyAge?: number | null;
  bodyType?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface HealthMetricQuery extends PaginationQuery {
  memberId?: number;
  startDate?: string;
  endDate?: string;
}

// SMS Types
export interface SmsResponse {
  messageId: string;
  status: string;
  message: string;
  to: string;
}

export interface SmsBalance {
  balance: string;
  estimatedMessages: number;
}

export interface SmsHistory {
  id: number;
  phoneNumber: string;
  message: string;
  status: string;
  sentAt: Date | null;
  memberId?: number | null;
}

export interface SmsStatus {
  messageId: string;
  cost: string;
  parts: number;
  status: string;
  description: string;
}

export interface SmsTemplate {
  id: number;
  name: string;
  type: string;
  content: string;
  variables: string[];
  isActive: boolean;
}

export interface SmsHistoryQuery extends PaginationQuery {
  days?: number;
}

// API Error type
export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// Get auth token from localStorage
function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('accessToken');
}

// Base fetch wrapper with auth
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  
  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  let response: Response;
  try {
    response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });
  } catch (err) {
    const message =
      err instanceof TypeError && err.message === 'Failed to fetch'
        ? `Cannot reach the API at ${API_URL}. Make sure the gym-api server is running (e.g. \`npm run start:dev\` in gym-api) and that NEXT_PUBLIC_API_URL matches its port.`
        : err instanceof Error
          ? err.message
          : 'Network error';
    throw new ApiError(0, message);
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    
    // Extract error message from different response formats
    let errorMessage = `Request failed with status ${response.status}`;
    
    if (errorData.message) {
      errorMessage = errorData.message;
    } else if (errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
      // Handle array of errors (from SmsApiError)
      errorMessage = errorData.errors.join('; ');
    } else if (errorData.error) {
      errorMessage = typeof errorData.error === 'string' 
        ? errorData.error 
        : errorData.error.message || errorMessage;
    }
    
    throw new ApiError(response.status, errorMessage);
  }
  
  return response.json();
}

// Build query string from params
function buildQueryString(params: Record<string, unknown>): string {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, String(value));
    }
  });
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
}

// Auth API
export const authApi = {
  login: (email: string, password: string) =>
    apiFetch<AuthResponse>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  
  getProfile: () => apiFetch<AdminProfile>('/api/auth/profile'),
  
  updateProfile: (data: { email?: string; password?: string; currentPassword?: string }) =>
    apiFetch<AdminProfile>('/api/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
};

// Dashboard API
export const dashboardApi = {
  getOverview: () => apiFetch<DashboardOverview>('/api/dashboard/stats'),
  getRevenue: () => apiFetch<RevenueBreakdown>('/api/dashboard/revenue'),
  getAttendanceTrends: () => apiFetch<AttendanceTrends>('/api/dashboard/attendance-trends'),
  getMemberGrowth: () => apiFetch<MemberGrowth>('/api/dashboard/member-growth'),
};

// Members API
export const membersApi = {
  getAll: (query: MemberQuery = {}) =>
    apiFetch<PaginatedResponse<Member>>(`/api/members${buildQueryString(query as Record<string, unknown>)}`),
  
  getOne: (id: number) => apiFetch<Member>(`/api/members/${id}`),
  
  getStats: () => apiFetch<MemberStats>('/api/members/stats'),
  
  search: (q: string, limit = 10) =>
    apiFetch<Member[]>(`/api/members/search?q=${encodeURIComponent(q)}&limit=${limit}`),
};

// Attendance API
export const attendanceApi = {
  getAll: (query: AttendanceQuery = {}) =>
    apiFetch<PaginatedResponse<Attendance>>(`/api/attendance${buildQueryString(query as Record<string, unknown>)}`),
  
  getOne: (id: number) => apiFetch<Attendance>(`/api/attendance/${id}`),
  
  getStats: () => apiFetch<AttendanceStats>('/api/attendance/stats'),
  
  getToday: () => apiFetch<TodayAttendance>('/api/attendance/today'),
  
  getByMember: (memberId: number, query: AttendanceQuery = {}) =>
    apiFetch<PaginatedResponse<Attendance>>(
      `/api/attendance/member/${memberId}${buildQueryString(query as Record<string, unknown>)}`
    ),
};

// Staff (synced from desktop, read-only on web)
export interface Staff {
  id: number;
  localId: number;
  fullName: string;
  phoneNumber: string | null;
  role: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface StaffAttendance {
  id: number;
  localId: number;
  staffId: number;
  staff?: Staff;
  scannedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface StaffQuery {
  page?: number;
  limit?: number;
  search?: string;
}

export const staffApi = {
  getAll: (query: StaffQuery = {}) =>
    apiFetch<PaginatedResponse<Staff>>(`/api/staff${buildQueryString(query as Record<string, unknown>)}`),
  getOne: (id: number) => apiFetch<Staff>(`/api/staff/${id}`),
  getAttendanceByStaff: (id: number, fromDate: string, toDate: string) =>
    apiFetch<StaffAttendance[]>(`/api/staff/${id}/attendance?fromDate=${encodeURIComponent(fromDate)}&toDate=${encodeURIComponent(toDate)}`),
  getAttendanceByDate: (date: string) =>
    apiFetch<StaffAttendance[]>(`/api/staff-attendance/by-date?date=${encodeURIComponent(date)}`),
};

// Potential Customer Types
export interface PotentialCustomer {
  id: number;
  fullName: string;
  phoneNumber: string;
  email?: string | null;
  registeredAt: string;
  status: 'pending' | 'converted' | 'ignored';
  convertedAt?: string | null;
  convertedToMemberId?: number | null;
  serviceId?: number | null;
  notes?: string | null;
  age?: number | null;
  height?: string | null;
  telegramUsername?: string | null;
  remark?: string | null;
  objective?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePotentialCustomerInput {
  fullName: string;
  phoneNumber: string;
  email?: string;
  serviceId?: number;
  notes?: string;
  age?: number;
  height?: string;
  telegramUsername?: string;
  remark?: string;
  objective?: string;
}

// Potential Customers API
export const potentialCustomersApi = {
  register: (input: CreatePotentialCustomerInput) =>
    apiFetch<PotentialCustomer>('/api/public/register', {
      method: 'POST',
      body: JSON.stringify(input),
    }),
  
  getPotentialCustomers: (
    status?: 'pending' | 'converted' | 'ignored',
    limit?: number,
    offset?: number
  ) =>
    apiFetch<{ data: PotentialCustomer[]; total: number }>(
      `/api/admin/potential-customers${buildQueryString({ status, limit, offset } as Record<string, unknown>)}`
    ),
};

// Transactions API
export const transactionsApi = {
  getAll: (query: TransactionQuery = {}) =>
    apiFetch<PaginatedResponse<Transaction>>(`/api/transactions${buildQueryString(query as Record<string, unknown>)}`),
  
  getOne: (id: number) => apiFetch<Transaction>(`/api/transactions/${id}`),
  
  getStats: () => apiFetch<TransactionStats>('/api/transactions/stats'),
  
  getByMember: (memberId: number, query: TransactionQuery = {}) =>
    apiFetch<PaginatedResponse<Transaction>>(
      `/api/transactions/member/${memberId}${buildQueryString(query as Record<string, unknown>)}`
    ),
};

// Services API
export const servicesApi = {
  getAll: (query: ServiceQuery = {}) =>
    apiFetch<PaginatedResponse<Service>>(`/api/services${buildQueryString(query as Record<string, unknown>)}`),
  
  getOne: (id: number) => apiFetch<Service>(`/api/services/${id}`),
  
  getStats: () => apiFetch<ServiceStats>('/api/services/stats'),
};

// Sync API
export const syncApi = {
  getLastSync: () => apiFetch<{ lastSyncAt: string | null }>('/api/sync/last-sync'),
};

// Health Metrics API
export const healthMetricsApi = {
  getByMember: (memberId: number, query: HealthMetricQuery = {}) =>
    apiFetch<PaginatedResponse<HealthMetric>>(
      `/api/health-metrics/member/${memberId}${buildQueryString(query as Record<string, unknown>)}`
    ),
  
  getLatest: (memberId: number) =>
    apiFetch<HealthMetric | null>(`/api/health-metrics/member/${memberId}/latest`),
};

// SMS API
export const smsApi = {
  sendSingle: (phone: string, message: string, memberId?: number) =>
    apiFetch<SmsResponse>('/api/sms/send', {
      method: 'POST',
      body: JSON.stringify({ phone, message, memberId }),
    }),

  sendBulk: (phones: string[], message: string, campaign?: string) =>
    apiFetch<{ campaignId: string | null; count: number }>('/api/sms/bulk', {
      method: 'POST',
      body: JSON.stringify({ phones, message, campaign }),
    }),

  sendPersonalized: (
    recipients: Array<{ phone: string; message: string }>,
    campaign?: string
  ) =>
    apiFetch<{ campaignId: string | null; count: number }>('/api/sms/personalized', {
      method: 'POST',
      body: JSON.stringify({ recipients, campaign }),
    }),

  getBalance: () => apiFetch<SmsBalance>('/api/sms/balance'),

  getStatus: (messageId: string) =>
    apiFetch<SmsStatus>(`/api/sms/status/${encodeURIComponent(messageId)}`),

  getHistory: (query: SmsHistoryQuery = {}) =>
    apiFetch<PaginatedResponse<SmsHistory>>(`/api/sms/history${buildQueryString(query as Record<string, unknown>)}`),

  getTemplates: () => apiFetch<SmsTemplate[]>('/api/sms/templates'),
};





