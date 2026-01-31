import { supabase } from "../supabase";

export const developer = {
  registerAsDeveloper: async (userId: string) => {
    const { data, error } = await supabase
      .from("developers")
      .insert({ user_id: userId })
      .select()
      .single();

    if (error) throw error;
    return data;
  },
  getProjects: async (developerId: string) => {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        id,
        description,
        created_at
      `,
      )
      .not(
        "id",
        "in",
        supabase
          .from("swipes")
          .select("project_id")
          .eq("developer_id", developerId),
      );

    if (error) throw error;
    return data;
  },

  postProjectsLike: async (developerId: string, projectId: string) => {
    const { error: swipeError } = await supabase.from("swipes").insert({
      developer_id: developerId,
      project_id: projectId,
    });

    if (swipeError) throw swipeError;

    const { data, error } = await supabase
      .from("likes")
      .insert({
        developer_id: developerId,
        project_id: projectId,
        status: true,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  postProjectsUnlike: async (developerId: string, projectId: string) => {
    const { data, error } = await supabase
      .from("swipes")
      .insert({
        developer_id: developerId,
        project_id: projectId,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
