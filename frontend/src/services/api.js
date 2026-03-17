const API_BASE = `${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api`;

export const getMapData = async (topic, skillLevel) => {
    try {
        const response = await fetch(`${API_BASE}/generate-map`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic, skill_level: skillLevel })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("getMapData failed:", error);
        return { nodes: [], links: [] };
    }
};

export const getRecommendations = async (topic) => {
    try {
        const response = await fetch(`${API_BASE}/generate-recommendations`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("getRecommendations failed:", error);
        return [];
    }
};

export const getPracticeData = async (topic, node_label, skill_level, key_concepts) => {
    try {
        const response = await fetch(`${API_BASE}/generate-practice`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic, node_label, skill_level, key_concepts })
        });
        return await response.json();
    } catch (error) {
        console.error("getPracticeData failed:", error);
        return null;
    }
};

export const getResourceData = async (topic, node_label, skill_level) => {
    try {
        const response = await fetch(`${API_BASE}/generate-resources`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic, node_label, skill_level })
        });
        return await response.json();
    } catch (error) {
        console.error("getResourceData failed:", error);
        return null;
    }
};
