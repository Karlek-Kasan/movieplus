export type DownloadStatus = 'downloading' | 'completed';

export type DownloadItem = {
  id: string;
  genre: string;
  title: string;
  thumbnailUri: string;
  status: DownloadStatus;
  /** Progress line e.g. "1.25 of 1.78 GB | 75%" */
  progressLabel?: string;
  /** Completed line e.g. "Movie | 1.78 GB" */
  metaLabel?: string;
};
