"use server";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  acceptanceRate: number;
  contributionPoints: number;
  reputation: number;
  username: string;
  avatar: string;
  realName: string;
  countryName: string;
  skillTags: string[];
  badges: Array<{
    displayName: string;
    icon: string;
  }>;
  recentSubmissions: Array<{
    title: string;
    timestamp: string;
    statusDisplay: string;
    lang: string;
  }>;
  submissionCalendar: Record<string, number>;
  totalActiveDays: number;
  streak: number;
}

export async function fetchLeetCodeProfile(
  username: string
): Promise<LeetCodeStats | null> {
  try {
    // Using the GraphQL endpoint directly
    const graphqlQuery = {
      query: `
        query userProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              realName
              userAvatar
              ranking
              reputation
              countryName
            }
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
            badges {
              displayName
              icon
            }
            submissionCalendar
            userCalendar {
              activeYears
              streak
              totalActiveDays
            }
          }
          recentSubmissionList(username: $username, limit: 10) {
            title
            timestamp
            statusDisplay
            lang
          }
        }
      `,
      variables: { username },
    };

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify(graphqlQuery),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error("Failed to fetch from LeetCode:", response.status);
      return null;
    }

    const data = await response.json();

    if (data.errors || !data.data || !data.data.matchedUser) {
      console.error("GraphQL errors or no user found:", data.errors);
      return null;
    }

    const user = data.data.matchedUser;
    const submissions = data.data.recentSubmissionList || [];

    // Parse the submission stats
    const stats = user.submitStatsGlobal.acSubmissionNum;
    const allSolved = stats.find((s: any) => s.difficulty === "All")?.count || 0;
    const easySolved = stats.find((s: any) => s.difficulty === "Easy")?.count || 0;
    const mediumSolved =
      stats.find((s: any) => s.difficulty === "Medium")?.count || 0;
    const hardSolved = stats.find((s: any) => s.difficulty === "Hard")?.count || 0;

    // Parse submission calendar (comes as JSON string)
    let submissionCalendar: Record<string, number> = {};
    try {
      if (user.submissionCalendar) {
        submissionCalendar = JSON.parse(user.submissionCalendar);
      }
    } catch {
      submissionCalendar = {};
    }

    return {
      totalSolved: allSolved,
      totalQuestions: 3000,
      easySolved,
      mediumSolved,
      hardSolved,
      ranking: user.profile.ranking || 0,
      acceptanceRate: 0,
      contributionPoints: 0,
      reputation: user.profile.reputation || 0,
      username: user.username,
      avatar: user.profile.userAvatar || "",
      realName: user.profile.realName || "",
      countryName: user.profile.countryName || "",
      skillTags: [],
      badges: user.badges || [],
      recentSubmissions: submissions,
      submissionCalendar,
      totalActiveDays: user.userCalendar?.totalActiveDays || 0,
      streak: user.userCalendar?.streak || 0,
    };
  } catch (error) {
    console.error("Error fetching LeetCode profile:", error);
    return null;
  }
}
