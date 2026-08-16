export type RiskLevel = 'SAFE' | 'MODERATE' | 'HIGH' | 'VERY_HIGH' | 'CRITICAL';
export type TrendDirection = 'RISING' | 'FALLING' | 'STABLE';
export type ForecastHorizon = 'NOW' | '+2H' | '+4H' | '+6H';

export interface FactorItem {
  id: string;
  name: string;
  level: 'High' | 'Moderate' | 'Low';
  description: string;
  impactScore: number;
}

export interface LocationNode {
  id: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  currentAQI: number;
  predictedAQI: number;
  riskLevel: RiskLevel;
  trend: TrendDirection;
  pm25Current: number;
  pm25Predicted: number;
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  factors: FactorItem[];
  explanation: string;
}

export interface ForecastPoint {
  timeLabel: string;
  timestamp: string;
  observedAQI: number | null;
  predictedAQI: number;
  upperBound: number;
  lowerBound: number;
  riskThreshold: number;
}

export interface AlertItem {
  id: string;
  severity: RiskLevel;
  area: string;
  message: string;
  timestamp: string;
  status: 'Active' | 'Acknowledged' | 'Resolved';
  suggestedAction: string;
}

export interface PriorityItem {
  priority: number;
  areaId: string;
  areaName: string;
  currentAQI: number;
  predictedAQI: number;
  trend: TrendDirection;
  risk: RiskLevel;
  recommendedAction: string;
}

export interface DashboardMetrics {
  currentAQI: number;
  forecastAQI: number;
  riskLevel: RiskLevel;
  hotspotsCount: number;
  risingAreasCount: number;
  activeAlertsCount: number;
}

export interface DashboardData {
  metrics: DashboardMetrics;
  selectedLocation: LocationNode;
  locations: LocationNode[];
  forecastSeries: ForecastPoint[];
  alerts: AlertItem[];
  priorityList: PriorityItem[];
  lastUpdated: string;
  isDemoData: boolean;
}

export interface PredictPayload {
  locationId: string;
  horizonHours: number;
  includeFactors?: boolean;
}

export interface PredictResponse {
  locationId: string;
  forecastHorizon: string;
  predictedAQI: number;
  riskLevel: RiskLevel;
  confidenceScore: number;
  factors: FactorItem[];
  modelTimestamp: string;
}

export interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  isEmpty: boolean;
}