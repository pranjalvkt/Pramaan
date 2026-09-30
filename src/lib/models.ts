/** Framework-independent domain types. Persistence can be added without coupling UI to a database. */
export type Assessment =
  | "Supported"
  | "Mostly Supported"
  | "Partially Supported"
  | "Misleading"
  | "Unsupported"
  | "False"
  | "Context Missing"
  | "Unverified"
  | "Disputed";
export type EditorialStatus =
  "draft" | "research" | "review" | "published" | "updated" | "archived";
export type SourceKind =
  | "Government"
  | "Court Record"
  | "Academic Research"
  | "Book"
  | "Historical Archive"
  | "Official Organization"
  | "News Organization"
  | "Interview"
  | "Dataset"
  | "Primary Document"
  | "Secondary Source";
export interface InvestigationRecord {
  id: string;
  slug: string;
  title: string;
  claimId: string;
  status: EditorialStatus;
  assessment?: Assessment;
  publishedAt?: string;
  reviewedAt?: string;
  version: number;
  categoryIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
  personIds: string[];
  organizationIds: string[];
  eventIds: string[];
  relatedInvestigationIds: string[];
}
export interface ClaimRecord {
  id: string;
  text: string;
  origin?: string;
}
export interface EvidenceRecord {
  id: string;
  investigationId: string;
  title: string;
  summary: string;
  detail: string;
  evidenceType: string;
  relevantDate?: string;
  sourceIds: string[];
}
export interface SourceRecord {
  id: string;
  title: string;
  author?: string;
  publisher?: string;
  publicationDate?: string;
  kind: SourceKind;
  url?: string;
  archiveUrl?: string;
  primaryOrSecondary: "primary" | "secondary";
  attributes: Record<string, string | boolean>;
  relevanceNote: string;
}
export interface SubmissionRecord {
  id: string;
  claim: string;
  sourceUrl?: string;
  context?: string;
  categoryId?: string;
  reason?: string;
  supportingMaterial?: string;
  email?: string;
  status: "pending" | "under_review" | "accepted" | "rejected" | "converted";
  createdAt: string;
}
